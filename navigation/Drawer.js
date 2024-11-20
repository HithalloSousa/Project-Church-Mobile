import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator, DrawerItemList } from "@react-navigation/drawer";
import { Image, SafeAreaView, StyleSheet, View } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';
import HomeScreen from "../screens/HomeScreen";
import QuemSomosScreen from "../screens/QuemSomosScreen";
import OndeServirScreen from "../screens/OndeServir";
import GaleriaFotosScreen from "../screens/GaleriaDeFotos";

const Drawer = createDrawerNavigator();

export const MyDrawer = () => {
    return (
        <Drawer.Navigator
            drawerContent={(props) => {
                return(
                    <SafeAreaView style={styles.drawerContent}>
                        <View style={styles.drawerHeader}>
                            <Image 
                                style={styles.drawerImage}
                                source={require('../assets/ImagemEscolhidos.png')}
                            />
                        </View>
                        <DrawerItemList {...props} />
                    </SafeAreaView>
                );
            }}
            screenOptions={{
                drawerActiveTintColor: 'white',
                drawerActiveBackgroundColor: '#003CB3',
                drawerLabelStyle: {
                    color: 'white',
                    fontSize: 20,
                    fontFamily: 'Georgia',
                },
                headerStyle:{
                    backgroundColor: '#000000'
                },
                headerTintColor: 'white',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontFamily: 'Gotham Black'
                }
            }}
        >
            <Drawer.Screen name="Escolhidos" component={HomeScreen} options={{
                drawerIcon: () => <Ionicons name="home" size={22} color={'white'} />,
                }}
            />
            <Drawer.Screen name="Quem Somos?" component={QuemSomosScreen} options={{
                drawerIcon: () => <AntDesign name="team" size={22} color={'white'} />
                }}
            />
            <Drawer.Screen name="Onde Servir" component={OndeServirScreen} options={{
                drawerIcon: () => <MaterialIcons name="work-outline" size={22} color="white" />
                }}
            />
            <Drawer.Screen name="Galeria de Fotos" component={GaleriaFotosScreen} options={{
                drawerIcon: () => <Entypo name="camera" size={22} color="white" />
                }}
            />
        </Drawer.Navigator>
    )   
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#000000'
    },
    drawerHeader: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 140,
    },
    drawerImage: {
        width: 87,
        resizeMode: 'contain',
    }
})