import React, { useState } from "react";
import { View, Image, TouchableOpacity, StyleSheet, Text } from "react-native";
import ImageViewing from "react-native-image-viewing";

export default function GaleriaFotosScreen() {
    const [isVisible, setIsVisible] = useState(false)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const images = [
        {uri: "https://images.pexels.com/photos/27269560/pexels-photo-27269560/free-photo-of-voo-natureza-ceu-passaro.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"},
        {uri: "https://images.pexels.com/photos/28847012/pexels-photo-28847012/free-photo-of-vista-deslumbrante-da-camara-municipal-de-bruxelas-na-belgica.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"},
        {uri: "https://images.pexels.com/photos/27054224/pexels-photo-27054224/free-photo-of-mar-baia-doca-vaga.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"},
        {uri: "https://images.pexels.com/photos/27054224/pexels-photo-27054224/free-photo-of-mar-baia-doca-vaga.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"},
        {uri: "https://images.pexels.com/photos/27054224/pexels-photo-27054224/free-photo-of-mar-baia-doca-vaga.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"},
    ]
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Fotos dos nossos últimos encontros</Text>
            <View style={styles.gallery}>
                {images.map((image, index) => (
                    <TouchableOpacity 
                        key={index} 
                        onPress={() => {
                            setCurrentImageIndex(index)
                            setIsVisible(true)
                        }}
                    >
                        <Image source={image} style={styles.thumbnail} />
                    </TouchableOpacity>
                ))}
            </View>

            <ImageViewing 
                images={images}
                imageIndex={currentImageIndex}
                visible={isVisible}
                onRequestClose={() => setIsVisible(false)}
            />
        </View>
    )
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
        color:'white'
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