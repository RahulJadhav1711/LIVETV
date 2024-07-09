import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";
import styles from './Style';
import { connect } from "react-redux";
import * as actions from '../../redux/actions/ReduxActions';

const Register = ({navigation,...props}) => {

    const {setRegisterForm, registerData} = props;
    const [click, setClick] = useState(true);
    const [click1, setClick1] = useState(true);
    const [isSecure, setSecure] = useState(true);
    const [isSecure1, setSecure1] = useState(true);

  const InsertRecord = () => {
    const { Name, Email, PhoneNo, Password, ConfirmPassword } = userData;
    if (Name.length === 0 || Email.length === 0 || PhoneNo.length === 0 || Password.length === 0 || ConfirmPassword.length === 0) {
      alert("Required field is missing");
    } else {
        var InsertAPIURL = "http://10.0.2.2:80/siloTv/register.php";

        var headers = {
            'Accept':'application/json',
            'Content-Type': 'application.json'
        };

        var Data = {
            Name: Name,
            Email: Email,
            PhoneNo: PhoneNo,
            Password: Password,
            ConfirmPassword: ConfirmPassword
        };

        fetch(InsertAPIURL,
            {
                method:'POST',
                headers: headers,
                body: JSON.stringify(Data)
            }
        )
        .then((response) => response.json())
        .then(data => {
            if (data.success) {
                alert(data.message);
                navigation.navigate('Login')
            } else {
                alert(data.message);
            }
        })
        .catch((error) => {
            alert("Error"+error);
        })
    }
  }

    const [userData, setUserData] = useState({
        Name: '',
        Email: '',
        PhoneNo: '',
        Password: '',
        ConfirmPassword: '',
    });

    // const storeData = () => {
    //     setRegisterForm(userData);
    // };

    const Pass1 = () => {
        setClick(!click);
        setSecure(!isSecure);
    }
    const Pass2 = () => {
        setClick1(!click1);
        setSecure1(!isSecure1);
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>SILO-<Text style={{ color: 'red' }}>TV</Text> REGISTER</Text>
            <View style={styles.place1}>
                <TextInput
                    style={styles.textInput1}
                    placeholder="Enter your Name"
                    value={userData.Name}
                    onChangeText={(e) => setUserData({...userData, Name: e})}
                    placeholderTextColor={'black'}
                />
                <TouchableOpacity style={styles.userImageView}>
                    <Image style={styles.user} source={require('../../assets/noti.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.place2}>
                <TextInput
                    style={styles.textInput1}
                    placeholder="Enter your Email"
                    value={userData.Email}
                    onChangeText={(e) => setUserData({...userData, Email: e})}
                    placeholderTextColor={'black'}

                />
                <TouchableOpacity style={styles.userImageView}>
                    <Image style={styles.user} source={require('../../assets/email.png')} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.userImageView}>
                </TouchableOpacity>
            </View>
            <View style={styles.place2}>
                <TextInput
                    style={styles.textInput1}
                    placeholder="Enter your No"
                    keyboardType="numeric"
                    maxLength={10}
                    value={userData.PhoneNo}
                    onChangeText={(e) => setUserData({...userData, PhoneNo: e})}
                    placeholderTextColor={'black'}

                />
                <TouchableOpacity style={styles.userImageView}>
                    <Image style={styles.user} source={require('../../assets/call.png')} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.userImageView}>
                </TouchableOpacity>
            </View>
            <View style={styles.place2}>
                <TextInput
                    style={styles.textInput1}
                    placeholder="Enter Password"
                    secureTextEntry={isSecure}
                    value={userData.Password}
                    onChangeText={(e) => setUserData({...userData, Password: e})}
                    placeholderTextColor={'black'}
                />
               
               <TouchableOpacity onPress={() => Pass1()} style={styles.userImageView}>
                    {click ? <Image style={styles.user} source={require('../../assets/eye.png')} />
                        : <Image style={styles.user} source={require('../../assets/openEye.png')} />}
                </TouchableOpacity>

                <TouchableOpacity style={styles.userImageView}>
                </TouchableOpacity>
            </View>
            <View style={styles.place2}>
                <TextInput
                    style={styles.textInput1}
                    placeholder="Confirm Password"
                    secureTextEntry={isSecure1}
                    value={userData.ConfirmPassword}
                    onChangeText={(e) => setUserData({...userData, ConfirmPassword: e})}
                    placeholderTextColor={'black'}
                />
                
                <TouchableOpacity onPress={() => Pass2()} style={styles.userImageView}>
                    {click1 ? <Image style={styles.user} source={require('../../assets/eye.png')} />
                        : <Image style={styles.user} source={require('../../assets/openEye.png')} />}
                </TouchableOpacity>

                <TouchableOpacity style={styles.userImageView}>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.loginBtn} onPress={() => InsertRecord()}>
                <Text style={styles.loginText}>REGISTER</Text>
            </TouchableOpacity>
            <View style={styles.registerLine}>
                <Text style={styles.line1}>Already Have An Account!</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.registerView}>
                    <Text style={styles.registerText}>LOGIN HERE</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const mapStateToProps = state => {
    return{
        registerData : state.ReduxReducers.registerData,
    };
};

const mapDispatchToProps = dispatch => {
    return{
        setRegisterForm: params => dispatch(actions.setRegisterForm(params))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Register);