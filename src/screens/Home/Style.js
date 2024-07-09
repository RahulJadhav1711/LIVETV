import { StyleSheet, Dimensions } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
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
    // textInput1: {
    //     backgroundColor: 'white',
    //     width: '100%',
    //     borderRadius: 8,
    //     paddingLeft: 15,
    //     paddingRight: 50,
    // },
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
    
    liveLine: {
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 10,
        flexDirection: 'row',
    },
    liveTextView: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: 'red',
        height: 30,
        width: '100%',
        borderRadius: 10
    },
    liveText: {
        color: 'white',
        fontSize: RFPercentage(2.3),
        fontWeight: 'bold',
    },
    videoDiscText: {
        color: 'white',
        fontSize: RFPercentage(2.3),
        fontWeight: 'bold',
        marginLeft: '2%',
        marginTop: '2%',
        width: '95%'
    },
    img1View: {
        marginTop: '20%'
    },
    img2View: {
        marginTop: '5%'
    },
    img1: {
        width: 100,
        height: 60,
        borderRadius: 10,
        backgroundColor: 'white'
    },
    img2: {
        width: 100,
        height: 60,
        borderRadius: 10,
    },
    videoCon: {
        // backgroundColor: 'red',
        height: 220,
        marginTop: '2%',
        width: width - 1,
        alignSelf: 'center',
        // marginBottom: 30
    },
    video: {
        width: '100%',
        height: '100%'
    },
    mainContainer: {
        flex: 1,
        // backgroundColor: 'blue',
        marginTop: '5%'
    },
    subContainer: {
        backgroundColor: 'green',
        height: '100%',
        width: '100%',
        flexDirection: 'row'
    },
    channleContainer: {
        width: '25%',
    },
    rowContainer: {
        // backgroundColor: 'white',
        // width: '100%'
    },
    timeText: {
        borderLeftWidth: 2,
        color: 'white',
        borderColor: 'gray',
        paddingLeft: 10,
        width: 202,
        fontSize: RFPercentage(2),
        // marginHorizontal: 15,
        // fontSize: 16,
        // fontWeight: 'bold',
        // color: '#000',
    },
    timeTextLast: {
        borderLeftWidth: 2,
        color: 'white',
        borderColor: 'gray',
        paddingLeft: 10,
        width: 200
    },
    timeText1: {
        color: 'white',
        borderColor: 'gray',

        paddingLeft: 10,
        width: 200
    },
    timeText12: {
        color: 'green',
        borderColor: 'gray',
        paddingLeft: 10,
        width: 200,
    },
    line1: {
        flexDirection: 'row',
        marginTop: '0.7%',
        height: 60,
        alignItems: 'center',
        borderRadius: 20
    },
    contentText: {
        color: 'white',
        fontWeight: '800'
    },
    line1content1: {
        width: 190,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        height: '100%',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: '#1E1B1B',
    },
    line1content2: {
        marginLeft: '0.4%',
        width: 189,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        backgroundColor: '#1E1B1B',
        height: '100%',
        justifyContent: 'center',
        borderRadius: 10
    },
    line1content3: {
        marginLeft: '0.4%',
        width: 180,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        backgroundColor: '#1E1B1B',
        height: '100%',
        justifyContent: 'center',
        borderRadius: 10
    },
    line1content4: {
        marginLeft: '0.4%',
        width: 190,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        backgroundColor: '#1E1B1B',
        height: '100%',
        justifyContent: 'center',
        borderRadius: 10
    },
    line1content5: {
        marginLeft: '0.4%',
        width: 390,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        backgroundColor: '#393838',
        height: '100%',
        justifyContent: 'center',
        borderRadius: 10
    },
    line2: {
        flexDirection: 'row',
        marginTop: '0.16%',
        // position: 'absolute',
        // left: 0,
        height: 60,
        alignItems: 'center',
        borderRadius: 20,
    },
    line2content1: {
        width: 395,
        alignItems: 'center',
        height: '100%',
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'gray',
        backgroundColor: '#393838',
    },
    line2content2: {
        marginLeft: '0.4%',
        width: 180,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        backgroundColor: '#1E1B1B',
        height: '100%',
        justifyContent: 'center',
        borderRadius: 10
    },
    line2content3: {
        marginLeft: '0.4%',
        width: 390,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        backgroundColor: '#393838',
        height: '100%',
        justifyContent: 'center',
        borderRadius: 10
    },
    line2content4: {
        marginLeft: '0.4%',
        width: 395,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        backgroundColor: '#393838',
        height: '100%',
        justifyContent: 'center',
        borderRadius: 10
    },
    line3: {
        flexDirection: 'row',
        marginTop: '0.15%',
        height: 60,
        alignItems: 'center',
        borderRadius: 20
    },
    line3content1: {
        width: 395,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        backgroundColor: '#393838',
        height: '100%',
        justifyContent: 'center',
        borderRadius: 10
    },
    line3content2: {
        marginLeft: '0.4%',
        width: 385,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        backgroundColor: '#393838',
        height: '100%',
        justifyContent: 'center',
        borderRadius: 10
    },
    line3content3: {
        marginLeft: '0.4%',
        width: 185,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        backgroundColor: '#1E1B1B',
        height: '100%',
        justifyContent: 'center',
        borderRadius: 10
    },
    line3content4: {
        marginLeft: '0.4%',
        width: 395,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        backgroundColor: '#393838',
        height: '100%',
        justifyContent: 'center',
        borderRadius: 10
    },
    line4: {
        flexDirection: 'row',
        marginTop: '0.15%',
        height: 60,
        alignItems: 'center',
        borderRadius: 20
    },
    line4content1: {
        width: 190,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'red',
        height: '100%',
        justifyContent: 'center',
        borderRadius: 10
    },
    line4content2: {
        marginLeft: '0.4%',
        width: 190,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        height: '100%',
        justifyContent: 'center',
        borderRadius: 10
    },
    line5: {
        flexDirection: 'row',
        marginTop: '0.15%',
        height: 60,
        alignItems: 'center',
        borderRadius: 20
    },
    line6: {
        flexDirection: 'row',
        marginTop: '0.15%',
        height: 60,
        alignItems: 'center',
        borderRadius: 20
    },
    line7: {
        flexDirection: 'row',
        marginTop: '0.15%',
        height: 60,
        alignItems: 'center',
        borderRadius: 20
    },
    currentTimeIndicator: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        height: 80, // Height of the indicator
        backgroundColor: 'red', // Color of the indicator
    },
    currentTimeText: {
        position: 'absolute',
        bottom: 5,
        right: 10,
        color: 'white',
        fontSize: 12,
        backgroundColor: 'red',
    },
   
  
})

export default styles;