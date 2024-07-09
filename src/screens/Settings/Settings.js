import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, FlatList, SafeAreaView } from "react-native";
import Nav from "../components/Nav/Nav";
import Video from "react-native-video";
import styles from './Style'

const Setting = ({ navigation }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const userId = 7;

    useEffect(() => {
        fetch(`http://10.0.2.2:80/siloTv/profile.php?user_id=${userId}`)
            .then(response => {
                console.log('Response status:', response.status);
                return response.json();
            })
            .then(data => {
                console.log('Received data:', data);
                if (data.error) {
                    console.error('Error:', data.error);
                } else {
                    setName(data.Name);
                    setEmail(data.Email);
                }
            })
            .catch(error => {
                console.error('Error fetching profile:', error);
            });
    }, []);

    const Data = [
        {
            firstImg: require('../../assets/noti.png'),
            title: "Account & Profile",
            Lastimg: require('../../assets/downArrow.png'),
        },
        {
            firstImg: require('../../assets/settings.png'),
            title: "General",
            Lastimg: require('../../assets/downArrow.png'),
        },
        {
            firstImg: require('../../assets/privacy.png'),
            title: "Privacy",
            Lastimg: require('../../assets/downArrow.png'),
        },
        {
            firstImg: require('../../assets/magic.png'),
            title: "Appearance",
            Lastimg: require('../../assets/downArrow.png'),
        },
        {
            firstImg: require('../../assets/microPhone.png'),
            title: "Audio & Video",
            Lastimg: require('../../assets/downArrow.png'),
        },
        {
            firstImg: require('../../assets/call2.png'),
            title: "Calling",
            Lastimg: require('../../assets/downArrow.png'),
        },
        {
            firstImg: require('../../assets/notification.png'),
            title: "Notifications",
            Lastimg: require('../../assets/downArrow.png'),
        },
        {
            firstImg: require('../../assets/contactus.png'),
            title: "Contact Us",
            Lastimg: require('../../assets/downArrow.png'),
        },
        {
            firstImg: require('../../assets/help.png'),
            title: "Help & Feedback",
            Lastimg: require('../../assets/downArrow.png'),
        },
    ]

    const renderitem = ({ item }) => (
        <TouchableOpacity style={styles.flatContainer}>
            <Image style={styles.flatFirstImg} source={item.firstImg} />
            <Text style={styles.flatText}>{item.title}</Text>
            <Image style={styles.flatArrow} source={item.Lastimg} />
        </TouchableOpacity>
    )
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.profileCon}>
                <TouchableOpacity style={styles.circle}>
                    <Image style={styles.img} source={require('../../assets/camera1.png')} />
                </TouchableOpacity>
                <View style={styles.nameCon}>
                    <Text style={styles.name}>Rahul Anil Jadhav</Text>
                    <Text style={styles.email}>rahulj@noitavonne.com</Text>
                </View>
            </TouchableOpacity>
            <SafeAreaView>
                <FlatList data={Data} renderItem={renderitem} />
            </SafeAreaView>
        </View>
    )
}

export default Setting;