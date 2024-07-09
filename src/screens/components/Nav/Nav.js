import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./Style";

const Nav = ({navigation}) => {
    return (
        <View style={styles.nav}>
            <Image style={styles.youtubeIcon} source={require('../../../assets/logo1.jpg')} />
            <Text style={styles.heading}>SILO TV</Text>
            <TouchableOpacity style={styles.searchView}>
                <Image style={styles.searchIcon} source={require('../../../assets/search.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.notiView}>
                <Image style={styles.notiIcon} source={require('../../../assets/noti.png')} />
            </TouchableOpacity>
        </View>
    )
}

export default Nav;