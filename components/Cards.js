import { Card, Button } from "@rneui/themed";
import { ScrollView, Text, View, TouchableOpacity, Linking  } from "react-native";
import React, { useState } from 'react';

export default function MyCards () {

    const [expandedCard, setExpandedCard] = useState(null);

    const handleImagePress = (cardId) => {
        setExpandedCard(expandedCard === cardId ? null : cardId);
    }
    const handleDownloadPDF = () => {
        Linking.openURL('https://www.example.com/your-pdf.pdf');
    };
    return(
        <View>
            <Card containerStyle ={{borderRadius: 10, backgroundColor: 'black', borderWidth: 0}}>
                <Card.Title style={{color: 'white'}}>Devocionais</Card.Title>
                <TouchableOpacity onPress={() => handleImagePress(1)}>
                    <Card.Image
                        style={{ padding: 0, borderRadius: 10, ...(expandedCard === 1 ? { width: '100%', height: 300 } : {})}}
                        resizeMode="cover"
                        source={{
                            uri:'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
                        }}
                    />
                </TouchableOpacity>
            </Card>
            <Card containerStyle ={{backgroundColor: 'black', borderWidth: 0}}>
                <Card.Title style={{color:'white'}}>Últimas EDB's</Card.Title>
                <TouchableOpacity onPress={handleDownloadPDF}>
                    <Card.Image
                        style={{ padding: 0, borderRadius: 10 }}
                        source={{
                            uri:'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
                        }}
                    />
                </TouchableOpacity>
                {/* <Button title="Download PDF" onPress={handleDownloadPDF} /> */}
            </Card>
            <Card containerStyle ={{borderRadius: 10, backgroundColor: 'black', borderWidth: 0}}>
                <Card.Title style={{color: 'white'}}>Últimas</Card.Title>
                <TouchableOpacity onPress={() => handleImagePress(2)}>
                    <Card.Image
                        style={{ padding: 0, borderRadius: 10, ...(expandedCard === 2 ? { width: '100%', height: 300 } : {})}}
                        source={{
                            uri:'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
                        }}
                    />
                </TouchableOpacity>
            </Card>
        </View>
    )
}

