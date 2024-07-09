import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";
import styles from './Style';
import { connect } from "react-redux";
import * as actions from '../../redux/actions/ReduxActions';

const Login = ({navigation,...props}) => {
    const {setLoginForm, loginData} = props;
    const [click, setClick] = useState(true);
    const [isSecure, setSecure] = useState(true);

    useEffect(() => {
        console.log('getData', JSON.stringify(loginData));
    })

    const [userData, setUserData] = useState({
        Email : '',
        Password: '',
    });

    const handleLogin = () => {
        const {Email, Password} = userData;
        if (!Email || !Password) {
            alert("Required field is missing");
            return;
        }

        const LoginAPIURL = "http://10.0.2.2:80/siloTv/login.php";

        const headers = {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
        };

        const Data = {
            Email: Email,
            Password: Password
        };

        fetch(LoginAPIURL, {
            method : 'POST',
            headers : headers,
            body : JSON.stringify(Data)
        })
        .then((response) => response.json())
        .then(data => {
            if (data.success) {
                alert(data.message);
                console.log("Message",JSON.stringify(Data))
                navigation.navigate('Home')
            } else {
                alert(data.message);
            }
        })
        .catch(error => {
            console.log("Error");
            alert("Error"+error.Message);
        })
    };  
    

    const storeData = () => {
        setLoginForm(userData);
    };

    const Pass = () => {
        setClick(!click);
        setSecure(!isSecure);
    }
    return (
        <View style={styles.container}>
            {/* <Image style={{width: 50, height: 50}} source={require('../../assets/logo1.jpg')}/> */}
            <Text style={styles.title}>SILO-<Text style={{ color: 'red' }}>TV</Text> LOGIN</Text>
            <View style={styles.place1}>
                <TextInput
                    style={styles.textInput1}
                    placeholder="Enter your Email"
                    value={userData.Email}
                    onChangeText={(e) => setUserData({...userData, Email: e})}
                    placeholderTextColor={'black'}
                />
                <TouchableOpacity style={styles.userImageView}>
                    <Image style={styles.user} source={require('../../assets/noti.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.place2}>
                <TextInput
                    style={styles.textInput1}
                    placeholder="Enter your Password"
                    secureTextEntry={isSecure}
                    value={userData.Password}
                    onChangeText={(e) => setUserData({...userData, Password: e})}
                    placeholderTextColor={'black'}
                />

                <TouchableOpacity onPress={() => Pass()} style={styles.userImageView}>
                    {click ? <Image style={styles.user} source={require('../../assets/eye.png')} />
                        : <Image style={styles.user} source={require('../../assets/openEye.png')} />}
                </TouchableOpacity>

                <TouchableOpacity style={styles.userImageView}>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Forget')} style={styles.forgetPass}>
                <Text style={styles.forgetPassText}>FORGOT PASSWORD ?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginBtn} onPress={() => handleLogin()}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
            <View style={styles.registerLine}>
                <Text style={styles.line1}>Don't Have An Account!</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Register')} style={styles.registerView}>
                    <Text style={styles.registerText}>REGISTER HERE</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const mapStateToProps = state => {
    return{
        loginData: state.ReduxReducers.loginData,
    };
};

const mapDispatchToProps = dispatch => {
    return{
        setLoginForm : params => dispatch(actions.setLoginForm(params)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);