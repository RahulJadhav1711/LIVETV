import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from './Style'

const Premium = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.notiNav}>
                <TouchableOpacity style={styles.crossImgView}>
                    <Image style={styles.crossImg} source={require('../../assets/cross.png')}/>
                </TouchableOpacity>
                <Text style={styles.title}>Premium</Text>
            </View>
            <View style={styles.notiLineView}>
                <Image style={styles.logoImg} source={require('../../assets/logo1.jpg')}/>
                <Text style={styles.lineTitle}>No Premium </Text>
                <Text style={styles.discLine}>Check Back To See New @ Mentions, reactions,</Text>
            </View>
        </View>
    )
}

export default Premium;