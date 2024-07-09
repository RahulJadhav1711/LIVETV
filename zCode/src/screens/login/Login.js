import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {connect} from 'react-redux';
import styles from './Styles';
import * as actions from '../../redux/actions/ReduxActions';

const Login = props => {
  const {setLoginForm, loginData} = props;

  useEffect(() => {
    console.log('gatData', JSON.stringify(loginData));
  });

  const [userData, setuserData] = useState({
    name: '',
    email: '',
    mobile: '',
    pass: '',
  });

  const storeData = () => {
    setLoginForm(userData);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="UserName"
        placeholderTextColor="black"
        style={styles.textinput1}
        value={userData.name}
        onChangeText={value => setuserData({...userData, ['name']: value})}
      />
      <TextInput
        placeholder="Email Id"
        placeholderTextColor="black"
        style={styles.textinput2}
        value={userData.email}
        onChangeText={value => setuserData({...userData, ['email']: value})}
      />
      <TextInput
        placeholder="Mobile"
        placeholderTextColor="black"
        style={styles.textinput2}
        value={userData.mobile}
        onChangeText={value => setuserData({...userData, ['mobile']: value})}
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor="black"
        style={styles.textinput2}
        value={userData.pass}
        onChangeText={value => setuserData({...userData, ['pass']: value})}
      />
      <TouchableOpacity style={styles.storeData} onPress={() => storeData()}>
        <Text>Store data</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    loginData: state.ReduxReducers.loginData,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setLoginForm: params => dispatch(actions.setLoginForm(params)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
