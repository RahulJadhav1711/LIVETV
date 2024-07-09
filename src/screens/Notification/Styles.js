import { StyleSheet, Dimensions } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const width = Dimensions.get('screen').width;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
    },
    notiNav: {
        flexDirection: 'row',
        width: width,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderColor: 'gray',
        height: 60
    },
    title: {
        fontSize: RFPercentage(3),
        color: 'white',
        fontWeight: 'bold'
    },
    crossImgView: {
        position: 'absolute',
        left: 0,
        marginLeft: '2%'
    },
    crossImg: {
        tintColor: 'white',
        width: 40,
        height: 40
    },
    notiLineView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoImg: {
        width: 300,
        height: 300,
        opacity: 0.4
    },
    lineTitle: {
        position: 'absolute',
        color: '#0AA2DF',
        top: 0,
        marginTop: '12%',
        fontWeight: 'bold',
        fontSize: RFPercentage(3.5),
    },

    discLine: {
        color: 'white',
        position: 'absolute',
        top: 0,
        marginTop: '30%',
        fontSize: RFPercentage(2),
    },
})

export default styles;