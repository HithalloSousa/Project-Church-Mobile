import { ScrollView, Text, View, StyleSheet, Linking, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useFonts } from 'expo-font';

export default function QuemSomosScreen() {
    const handlePress = () => {
        Linking.openURL('https://www.instagram.com/redeescolhidos')
    }
    const [fontsLoaded] = useFonts({
        'Opensans': require('../assets/OpenSans.ttf')
    })
    return (
        <ScrollView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.subtitle}>Somos a Rede Escolhidos</Text>
                <Text style={styles.body}>
                    Jovens e adolescentes da Igreja de Deus no Brasil da Vila Rosa desde 2015.
                    Cremos que a Igreja de Cristo é mais que uma comunidade, somos uma família! 
                    Venha conhecer essa família, que te acolherá como um irmão!
                </Text>
                <Text style={styles.subtitle}>Acompanhe nosso trabalho!!</Text>
            </View>
            <View style={styles.instagramContainer}>
                <TouchableOpacity style={styles.link} onPress={handlePress}>
                    <Icon name="instagram" size={24} color='#E4405F' style={styles.icon} />
                    <Text style={styles.username}>@redeescolhidos</Text>
                </TouchableOpacity>
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
    },
    body: {
        fontSize: 15,
        color: 'white',
        lineHeight: 24,
        marginBottom: 10,
        fontFamily:'Opensans'
    },
    subtitle: {
        fontSize: 20,
        fontWeight: '600',
        color: 'white',
        marginBottom: 20,
        textAlign: 'center',
        fontFamily:'Opensans'
    },
    instagramContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -20,
    },
    link: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginRight: 8,
    },
    username: {
        fontSize: 16,
        color: '#E4405F',
        fontWeight: 'bold',
    },
});