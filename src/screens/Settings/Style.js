import { StyleSheet, Dimensions } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const width = Dimensions.get('screen').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    profileCon: {
        // backgroundColor: 'white',
        // marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: 'gray',
        height: '10%'
    },
    circle: {
        backgroundColor: '#4380F2',
        borderRadius: 25,
        borderWidth: 0.5,
        borderColor: 'white',
        padding: 16,
        marginLeft: '2%'
    },
    img: {
        width: 20,
        height: 20,
        tintColor: 'white'
    },
    nameCon: {
        marginLeft: '4%',
    },
    name: {
        color: 'white',
        fontSize: RFPercentage(2.5),
        fontWeight: 'bold'
    },
    email: {
        color: 'white',
        fontSize: RFPercentage(1.5),
        fontWeight: '400',
        letterSpacing: 1
    },
    flatContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: width,
        borderBottomWidth: 1, 
        borderColor: 'gray',
        paddingTop: '5%',
        paddingBottom:'5%',
    },
    flatFirstImg: {
        width: 25, 
        height: 25,
        tintColor: 'gray',
        marginLeft: '4%'
    },
    flatText: {
        color: 'white',
        fontSize: RFPercentage(2.1),
        fontWeight: '800',
        letterSpacing: 1,
        marginLeft: '5%'
    },
    flatArrow: {
        tintColor: 'gray', 
        width: 20,
        height: 20,
        transform: [{ rotate: '180deg' }],
        position: 'absolute', 
        right: 0,
        marginRight: '5%'
    }
})

export default styles;