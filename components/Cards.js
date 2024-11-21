import { Card, Button } from "@rneui/themed";
import { ScrollView, Text, View, TouchableOpacity, Linking  } from "react-native";
import React, { useEffect, useState } from 'react';
import axios from "axios";

export default function MyCards () {

    const [expandedCard, setExpandedCard] = useState(null);
    const [ultimaEdb, setUltimaEdbData] = useState([])
    const [ultimoPdf, setUltimoPdfData] = useState([])
    const [devocionais, setDevocionaisData] = useState([])
    const [cardDimensions, setCardDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        axios.get('http://192.168.0.134:8000/api/ultima_edb/').then(response => {
            // console.log('Resposta formatada:', JSON.stringify(response.data, null, 2));
            console.log('Requisição do ultima edb feita')
            setUltimaEdbData(response.data[0])
        })
        .catch(error => {
            console.log('Erro na requisição:', error)
        })
    }, [])

    useEffect(() => {
        axios.get('http://192.168.0.134:8000/api/devocionais/').then(response => {
            // console.log('Resposta formatada:', JSON.stringify(response.data, null, 2));
            console.log('Requisição dos devocionais feita')
            setDevocionaisData(response.data[0])
        })
        .catch(error => {
            console.log('Erro na requisição:', error)
        })
    }, [])

    useEffect(() => {
        axios.get('http://192.168.0.134:8000/api/pdf/').then(response => {
            console.log('Requisição do PDF feita')
            setUltimoPdfData(response.data[0])
        })
        .catch(error => {
            console.log('Erro na requisição do PDF:', error)
        })
    }, [])

    const handleImagePress = (cardId) => {
        setExpandedCard(expandedCard === cardId ? null : cardId);
    }
    const handleDownloadPDF = (url) => {
        Linking.openURL(url);
    };
    return(
        <View>
            <Card containerStyle ={{borderRadius: 10, backgroundColor: 'black', borderWidth: 0}}
                onLayout={(event) => {
                    const { width, height } = event.nativeEvent.layout;
                    
                    setCardDimensions({ width, height });
                    // console.log('Dimensões do Card:', width, height);
                }}
            >
                <Card.Title style={{color: 'white'}}>Devocionais</Card.Title>
                <TouchableOpacity onPress={() => handleImagePress(1)}>
                    <Card.Image
                        style={{ padding: 0, borderRadius: 10, ...(expandedCard === 1 ? { width: '100%', height: 300 } : {})}}
                        resizeMode="cover"
                        source={{
                            uri: devocionais && devocionais.picture,
                        }}
                    />
                </TouchableOpacity>
            </Card>

            <Card containerStyle ={{backgroundColor: 'black', borderWidth: 0}}>
                <Card.Title style={{color:'white'}}>Últimas EDB's</Card.Title>
                <TouchableOpacity onPress={() => handleDownloadPDF(ultimoPdf.arquivo)}>
                    <Card.Image
                        style={{ padding: 0, borderRadius: 10, width:'100%' }}
                        source={{
                            uri: ultimaEdb && ultimaEdb.picture,
                        }}
                    />
                </TouchableOpacity>
                {/* <Button title="Download PDF" onPress={handleDownloadPDF} /> */}
            </Card>
        </View>
    )
}

