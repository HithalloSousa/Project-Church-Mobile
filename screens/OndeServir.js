import { SafeAreaView, ScrollView, View, StyleSheet, Image } from "react-native";
import { Text } from '@rneui/themed';
import { useFonts } from 'expo-font';

export default function OndeServirScreen() {
    const [fontsLoaded] = useFonts({
        'Opensans': require('../assets/OpenSans.ttf')
    })

    return (
        <ScrollView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.text}>
                    Bem-vindo(a) à Igreja de Deus!! 
                </Text>
                <Text style={styles.text}>
                    Temos vários ministérios onde você pode exercitar os dons distribuídos entre nós por Deus. 
                </Text>
                <Text style={styles.subheading}>Aqui apresentamos as opções:</Text>
                <Text style={styles.bullet}>• Louvor</Text>
                <Text style={styles.bullet}>• Ensino</Text>
                <Text style={styles.bullet}>• Intercessão</Text>
                <Text style={styles.bullet}>• Mídias</Text>
                <Text style={styles.bullet}>• Organização de eventos</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    header: {
        padding: 20,
        backgroundColor: '#6200ea',
        alignItems: 'center',
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    content: {
        padding: 20,
        backgroundColor: 'black'
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    text: {
        fontSize: 19,
        color: 'white',
        marginBottom: 10,
        fontFamily: 'Opensans'
    },
    subheading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        color: 'white'
    },
    bullet: {
        fontSize: 15,
        color: 'white',
        marginLeft: 10,
        marginTop: 10,
        marginBottom: 10,
        fontFamily: 'Opensans'
    },
});