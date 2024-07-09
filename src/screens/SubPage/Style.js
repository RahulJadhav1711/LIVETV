import { StyleSheet, Dimensions } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const width = Dimensions.get('screen').width;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
    },
    nav: {
        marginLeft: 10,
        flexDirection: 'row',
        alignItems: 'center',
        width: width-23,
        // marginTop: 10,
        height: '5%',
        // backgroundColor: '#DD22E6',
        borderBottomWidth: 2,
        borderBottomColor: 'white'
    },
    youtubeIcon: {
        width: 25,
        height: 25,
        borderRadius: 15
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
    videoCon: {
        // backgroundColor: 'red',
        height: 220,
        marginTop: '5%',
        width: width,
        // alignSelf: 'center',
        // marginBottom: 30
    },
    video: {
        width: '100%',
        height: '100%'
    },
    titleLine: {
        marginTop: 20,
        marginLeft: 10,
        // flexDirection: 'row',
        // alignItems: 'center',
        borderBottomWidth: 2,
        borderColor: 'gray',
        width: width -20,
    },
    title: {
        fontSize: RFPercentage(2.5),
        color: 'white',
        fontWeight: 'bold',
        lineHeight: 30,
        // paddingBottom: '3%'
        // marginLeft: 10,
    },
    discLine:{
        // paddingBottom: '2%',    
        flexDirection: 'row', 
        alignItems: 'center',
        // backgroundColor: 'red',
    },
    disc: {
        fontSize: RFPercentage(1.9),
        color: 'white',
        fontWeight: '300',
        lineHeight: 30,
        // marginLeft: 10,
    },
    disc1: {
        fontSize: RFPercentage(1.9),
        color: 'white',
        fontWeight: '300',
        // width: width -20
        lineHeight: 20,
        // marginLeft: 10,
    },
    discLast : {
        paddingBottom: 10, 
        // backgroundColor: 'red'
    },
    discArrow: {
        position: 'absolute',
        right: 10
    },
    discArrowImg: {
        width: 20,
        height: 20,
        tintColor: 'white',
        transform: [{rotate: '270deg'}]
    },
    discArrowImg1: {
        width: 20,
        height: 20,
        tintColor: 'red',
        transform: [{rotate: '90deg'}]
    },
    addFavLine: {
        flexDirection: 'row',
        alignItems: 'center', 
        // backgroundColor: 'red',
        width: width - 20, 
        height: 50,
        marginTop: '2%', borderBottomWidth: 2,
        borderColor: 'gray',
        marginLeft: 10,
        // paddingBottom: '2%'
    },
    sonyImg: {
        width: '20%', 
        height: '100%',
    },
    sonyText : {
        fontSize: RFPercentage(1.9), 
        color: 'white',
        fontWeight: '900'
    },
    like: {
        tintColor: 'white'
    },
    like1: {
        tintColor: 'red',
        width: 32,
        height: 32
    },
    relatedView: {
        marginTop: 10,
    },
})

export default styles;