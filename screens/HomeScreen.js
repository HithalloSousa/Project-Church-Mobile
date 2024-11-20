import { SafeAreaView, ScrollView, View } from "react-native";
import MyCarousel from "../components/Carousel";
import MyCards from "../components/Cards";

export default function HomeScreen() {
    return (
        <ScrollView style={{backgroundColor: 'black'}}>
            <View style={{backgroundColor: 'black'}}>
                <MyCarousel/>
                <MyCards/>
            </View>
        </ScrollView>
    )
}