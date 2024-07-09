import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    nav: {
        // marginLeft: 10,
        flexDirection: 'row',
        alignItems: 'center',
        // marginTop: 10,
        height: '5%',
        // backgroundColor: '#DD22E6',
        // borderBottomWidth: 2,
        // borderBottomColor: 'white'
    },
    youtubeIcon: {
        width: 25,
        height: 25,
        borderRadius: 15,
                marginLeft: 10,
    },
    searchView: {
        right: 0,
        position: 'absolute',
        marginRight: 45,
    },
    notiView: {
        right: 0,
        position: 'absolute',
        marginRight: 10,
    },
    searchIcon: {
        width: 25,
        height: 25,
        tintColor: 'white',
    },
    notiIcon: {
        width: 25,
        height: 25,
        tintColor: 'white',
    },
    heading: {
        color: 'white',
        fontSize: RFPercentage(2),
        marginLeft: 5,
    },
})

export default styles;