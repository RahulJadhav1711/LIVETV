import React, { useEffect } from "react";
import { View, Text, Image } from "react-native";
import styles from "./Style";

const Splash = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
          navigation.navigate('Home');
        },2000)
    }, []);
    return(
        <View style={styles.container}>
            <Image style={styles.icon} source={require('../../assets/splashLogo.jpeg')}/>
            {/* <Text style={styles.title}><Text style={{color: '#D9008D'}}>JIO</Text>CENEMA</Text> */}
            <Text style={styles.disc}>Please Wait We Loading Our LiveTv</Text>
        </View>
    )
}
export default Splash;