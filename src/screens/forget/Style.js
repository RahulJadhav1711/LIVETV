import { StyleSheet, Dimensions } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const width = Dimensions.get('screen').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    title: {
        color: 'white',
        fontSize: RFPercentage(3),
        fontWeight: 'bold',
        marginLeft: '5%',
        marginTop: '10%'   
    },
    textLine1: {
        marginLeft: '5%' ,
        marginTop: '4%'   
    },
    text: {
        color: 'white',
        fontSize: RFPercentage(2.2),
    },
    text1: {
        color: 'white',
        fontSize: RFPercentage(2.2),
        marginTop: '1%'   
    },
    textInput1: {
        marginLeft: '5%',
        backgroundColor: 'white',
        width: '90%',
        borderRadius: 8,
        paddingLeft: 15,
        paddingRight: 50,
        color: 'black',
        marginTop: '6%',
        // height: '6%'
    },
    btn: {
        width: '90%',
        backgroundColor: '#0DAF48',
        padding: '3%',
        marginLeft: '5%',
        marginTop: '5%',
        borderRadius: 15,
        alignItems: 'center'
    },
    btnText: {
        color: 'white',
        fontWeight: '900',
        fontSize: RFPercentage(2.2)
    },
})

export default styles;