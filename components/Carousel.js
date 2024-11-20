import React, { useEffect, useRef, useState } from 'react';
import { Text, View, Dimensions, Image, StyleSheet, FlatList } from 'react-native';

export default function MyCarousel() {

    const [currentIndex, setCurrentIndex] = useState(0);
    const flatListRef = useRef(null);

    const autoRotate = () => {
    const nextIndex = (currentIndex + 1) % data.length;

    if (nextIndex >= 0 && nextIndex < data.length) {
      const nextItemOffset = (Dimensions.get('window').width + 10) * nextIndex;
        flatListRef?.current?.scrollToOffset({
        animated: true,
        offset: nextItemOffset,
    });
        setCurrentIndex(nextIndex);
    } else {
        setCurrentIndex(0);
    }
    };

    useEffect(() => {
    const interval = setInterval(autoRotate, 4000);

    return () => clearInterval(interval);
    }, [currentIndex]);

    const data = [
        {
            title: 'Slide 1',
            image: 'https://services.meteored.com/img/article/inteligencia-artificial-aprende-a-reconstruir-imagens-vistas-por-pessoas-ciencia-fotos-1679175318563_1280.jpg',
        },
        {
            title: 'Slide 2',
            image: 'https://designcomcafe.com.br/wp-content/uploads/2023/10/como-criar-prompts-para-geracao-de-imagens-com-ia-1024x538.jpg',
        },
        {
            title: 'Slide 3',
            image: 'https://i.blogs.es/1d57b9/agentes-ia/1366_2000.jpeg',
        },
    ];

    return (
        <FlatList
            ref={flatListRef}
            data={data}
            renderItem={({ item }) => (
                <View style={styles.slide}>
                    <Image source={{ uri: item.image }} style={styles.image} />
                </View>
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true}
            snapToInterval={Dimensions.get('window').width + 10}
            decelerationRate="fast"
            keyExtractor={(item, index) => index.toString()}
        />
    );
}

const styles = StyleSheet.create({
    slide: {
        width: Dimensions.get('window').width,
        padding: 10,
        backgroundColor: 'black',
        alignItems: 'center'
    },
    image: {
        width: 400,
        height: 200,
        borderRadius: 10,
    },
});
