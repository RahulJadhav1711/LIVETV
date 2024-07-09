import { StyleSheet, Dimensions } from "react-native";
import { RFValue, RFPercentage } from "react-native-responsive-fontsize";

const width = Dimensions.get('screen').width;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        letterSpacing: 10,
        color: 'white',
        fontSize: RFPercentage(2.4),
        fontWeight: 'bold'
    },
    place1: {
        width: '85%',
        marginTop: '10%',
        justifyContent: 'center'
    },
    place2: {
        width: '85%',
        marginTop: '5%',
        justifyContent: 'center'
    },
    textInput1: {
        backgroundColor: 'white',
        width: '100%',
        borderRadius: 8,
        paddingLeft: 15,
        paddingRight: 50,
        color: 'black'
    },
    userImageView: {
        position: 'absolute',
        right: 0,
        marginRight: 10
    },
    user: {
        width: 27,
        height: 27
    },
    forgetPass: {
        marginTop: '3%',
        marginLeft: '40%',
        borderBottomWidth: 2,
        borderColor:'blue',
    },
    forgetPassText: {
        color: 'white',
        fontSize: RFPercentage(1.8),
        letterSpacing: 2,
    },
    loginBtn: {
        backgroundColor: '#0DAF48',
        width: '40%',
        height: '6%',
        marginTop: '10%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    loginText: {
        color: 'white',
        fontSize: RFPercentage(2.3),
        fontWeight: 'bold',
        letterSpacing: 4
    },
    registerLine: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        marginBottom: '2%',
        alignItems: 'center',
    },
    line1: {
        color: 'gray',
        fontSize: RFPercentage(2),
        letterSpacing: 2,
    },
    registerView: {
        marginLeft: 2,
        borderBottomWidth: 2,
        borderColor:'blue',
    },
    registerText: {
        color: 'white',
        fontSize: RFPercentage(1.8),
        letterSpacing: 2,
    },
})

export default styles;