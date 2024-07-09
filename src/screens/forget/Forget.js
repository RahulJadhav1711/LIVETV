import React from "react";
import { View, Text, TextInput,TouchableOpacity } from "react-native";
import styles from './Style';

const Forget = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>FORGOT PASSWORD</Text>
            <View style={styles.textLine1}>
                <Text style={styles.text}>Enter Your username, email or mobile number</Text>
                <TouchableOpacity>
                    <Text style={styles.text1}>Can't reset your password ?</Text>
                </TouchableOpacity>
            </View>
            <TextInput
                style={styles.textInput1}
                placeholder="Username, Email or Mobile Number"
                placeholderTextColor={'gray'}
            />
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>CONTINUE</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Forget;