import { StyleSheet, Dimensions } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const width = Dimensions.get('screen').width;

const styles = StyleSheet.create({
    bottomNav : {
        height: '5%',
        // backgroundColor: 'gray',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    img1View: {
        position: 'absolute',
        left: 0,
        marginLeft: 10,
    },
    img1: {
        width: 30,
        height: 30,
        tintColor: 'white'
    },
})

export default styles;