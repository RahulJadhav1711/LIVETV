import { StyleSheet } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        width: '70%',
        height: '9%',
        // borderRadius: 35,
    },
    title: {
        fontSize: 50,
        color: 'white',
        marginTop: 10
    },
    disc: {
        color: 'gray',
        position: 'absolute',
        bottom: 0,
        marginBottom: 30,
        fontSize: RFPercentage(2)
    },
})

export default styles;
