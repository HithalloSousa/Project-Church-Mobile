import axios from "axios";
import React, { useState, useEffect } from "react";
import { View, Image, TouchableOpacity, StyleSheet, Text } from "react-native";
import ImageViewing from "react-native-image-viewing";

export default function GaleriaFotosScreen() {
    const [isVisible, setIsVisible] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [photos, setPhotosData] = useState([]);

    useEffect(() => {
        axios
            .get('http://192.168.0.134:8000/api/gallery/')
            .then(response => {
                console.log('Requisição bem-sucedida das fotos');
                setPhotosData(response.data);
            })
            .catch(error => {
                console.log('Erro na requisição:', error);
            });
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Fotos dos nossos últimos encontros</Text>
            <View style={styles.gallery}>
                {photos.map((image, index) => (
                    <TouchableOpacity
                        key={image.id}
                        onPress={() => {
                            setCurrentImageIndex(index);
                            setIsVisible(true);
                        }}
                    >
                        <Image source={{ uri: image.picture }} style={styles.thumbnail} />
                    </TouchableOpacity>
                ))}
            </View>

            <ImageViewing
                images={photos.map(img => ({ uri: img.picture }))}
                imageIndex={currentImageIndex}
                visible={isVisible}
                onRequestClose={() => setIsVisible(false)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        padding: 10,
    },
    title: {
        fontSize: 15,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
        color: 'white',
    },
    gallery: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
    thumbnail: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
});
