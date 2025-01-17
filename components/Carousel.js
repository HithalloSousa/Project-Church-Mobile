import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Text, View, Dimensions, Image, StyleSheet, FlatList, Modal, TouchableOpacity } from 'react-native';

export default function MyCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const flatListRef = useRef(null);
    const [carousel, setCarouselData] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const autoRotate = () => {
        const nextIndex = currentIndex === carousel.length - 1 ? 0 : currentIndex + 1;
        flatListRef?.current?.scrollToOffset({
            animated: true,
            offset: (Dimensions.get('window').width + 10) * nextIndex,
        });
        setCurrentIndex(nextIndex);
    };

    useEffect(() => {
        if (carousel.length > 0) {
            const interval = setInterval(autoRotate, 4000);
            return () => clearInterval(interval);
        }
    }, [carousel, currentIndex]);

    useEffect(() => {
        axios
            .get('http://192.168.0.134:8000/api/carousel/')
            .then((response) => {
                console.log('Requisição do Carousel feita');
                setCarouselData(response.data);
            })
            .catch((error) => {
                console.log('Erro na requisição:', error);
            });
    }, []);

    const handleImagePress = (imageUri) => {
        setSelectedImage(imageUri);
        setModalVisible(true);
    };

    const handleScrollEnd = (event) => {
        const offsetX = event.nativeEvent.contentOffset.x;
        const newIndex = Math.round(offsetX / (Dimensions.get('window').width + 10));
        setCurrentIndex(newIndex);
    };

    return (
        <View style={{ flex: 1 }}>
            {/* Carousel */}
            <FlatList
                ref={flatListRef}
                data={carousel}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handleImagePress(item.picture)}>
                        <View style={styles.slide}>
                            <Image source={{ uri: item.picture }} style={styles.image} />
                        </View>
                    </TouchableOpacity>
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                snapToInterval={Dimensions.get('window').width + 10}
                decelerationRate="fast"
                keyExtractor={(item, index) => index.toString()}
                onMomentumScrollEnd={handleScrollEnd}
            />

            {/* Modal to show the full-sized image */}
            <Modal
                visible={modalVisible}
                transparent
                animationType="fade"
                onRequestClose={() => setModalVisible(false)}
            >
                <TouchableOpacity style={styles.modalOverlay} onPress={() => setModalVisible(false)}>
                    <Image source={{ uri: selectedImage }} style={styles.modalImage} />
                </TouchableOpacity>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    slide: {
        width: Dimensions.get('window').width,
        padding: 10,
        backgroundColor: 'black',
        alignItems: 'center',
    },
    image: {
        width: 400,
        height: 200,
        borderRadius: 10,
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    modalImage: {
        width: '90%',
        height: '80%',
        resizeMode: 'contain',
        borderRadius: 10,
    },
});
