import React, { useState, useEffect, useRef } from "react";
import { Text, View, Image, TouchableOpacity, ScrollView, Dimensions, TextInput } from "react-native";
import styles from './Style';
import Video from "react-native-video";
import Nav from "../components/Nav/Nav";

const height = Dimensions.get('screen').height;

const Home = ({ navigation }) => {
    const [currentTimePosition, setCurrentTimePosition] = useState(0);
    const [currentTimeText, setCurrentTimeText] = useState("00:00 AM");
    const scrollViewRef = useRef(null);
    const [onChange, setOnChange] = useState(true);

    const calculateCurrentTimePosition = () => {
        const now = new Date();
        const startHour = 9; // 7:00 AM
        const endHour = 18.5; // 6:00 PM
        const currentHour = now.getHours();
        const currentMinutes = now.getMinutes();

        if (currentHour >= startHour && currentHour < endHour) {
            const totalMinutes = (currentHour - startHour) * 60 + currentMinutes;
            const totalTimeSlots = (endHour - startHour) * 2;
            const position = (totalMinutes / (totalTimeSlots * 30)) * 100;
            return position;
        } else if (currentHour >= endHour) {
            return 100;
        } else {
            return 0;
        }
    };

    const updateTimeText = () => {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
        const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
        setCurrentTimeText(`${formattedHours}:${formattedMinutes} ${ampm}`);
    };

    const scrollToCurrentTimePosition = () => {
        if (scrollViewRef.current) {
            const totalTimeSlots = 19;
            const scrollPosition = (currentTimePosition / 100) * totalTimeSlots * 100;
            scrollViewRef.current.scrollTo({ x: scrollPosition, animated: true });
        }
    };

    useEffect(() => {
        const updatePosition = () => {
            setCurrentTimePosition(calculateCurrentTimePosition());
            updateTimeText();
            // scrollToCurrentTimePosition();
        };
        updatePosition();
        const interval = setInterval(updatePosition, 60000); // Update every minute

        return () => clearInterval(interval);
    }, []);
    return (
        <View style={styles.container}>
            <View style={styles.nav}>
                <Image style={styles.youtubeIcon} source={require('../../assets/logo1.jpg')} />
                <Text style={styles.heading}>SILO TV</Text>
                {/* <View>
                <TextInput
                    style={styles.textInput1}
                    placeholder="Enter your Name"
                />
                </View> */}
                <TouchableOpacity style={styles.searchView}>
                    <Image style={styles.searchIcon} source={require('../../assets/search.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.notiView}>
                    <Image style={styles.notiIcon} source={require('../../assets/noti.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.videoCon}>
                <Video source={require('../../assets/serial.mp4')}
                    style={styles.video}
                    // muted
                    controls={true} />
            </View>
            <TouchableOpacity style={styles.liveLine}>
                <Text style={styles.liveTex}>LIVE CHANNELS •</Text>
            </TouchableOpacity>
            <ScrollView>
                <View style={{ flexDirection: 'row', height: '100%' }}>
                    <View>
                        <TouchableOpacity onPress={scrollToCurrentTimePosition} style={styles.liveTextView}>
                            <Text style={styles.liveText}>• Live</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('SubPage')} style={styles.img1View}>
                            <Image style={styles.img1} source={require('../../assets/sonyTen.jpg')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('liveStream')} style={styles.img2View}>
                            <Image style={styles.img2} source={require('../../assets/sonySab.jpg')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.img2View}>
                            <Image style={styles.img2} source={require('../../assets/abp.webp')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.img2View}>
                            <Image style={styles.img2} source={require('../../assets/colorsceneplex.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.img2View}>
                            <Image style={styles.img2} source={require('../../assets/starsports.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.img2View}>
                            <Image style={styles.img2} source={require('../../assets/sonyMarathi.jpg')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.img2View}>
                            <Image style={styles.img2} source={require('../../assets/zeeTalk.jpg')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.img2View}>
                            <Image style={styles.img2} source={require('../../assets/stargold.jpg')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.img2View}>
                            <Image style={styles.img2} source={require('../../assets/sonyEspn.png')} />
                        </TouchableOpacity>
                    </View>
                    <ScrollView style={{ marginLeft: 10, }}
                        horizontal={true}
                        ref={scrollViewRef}>
                        <View>
                            <View style={{ flexDirection: 'row', position: 'relative' }}>
                                <View style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: `${currentTimePosition}%`,
                                    width: 3,
                                    height: height,
                                    backgroundColor: 'red',
                                    zIndex: 10,
                                }} />
                                {/* <Text style={styles.timeText}>07:00 AM</Text>
                                <Text style={styles.timeText}>07:30 AM</Text>
                                <Text style={styles.timeText}>08:00 AM</Text>
                                <Text style={styles.timeText}>08:30 AM</Text> */}
                                <Text style={styles.timeText}>09:00 AM</Text>
                                <Text style={styles.timeText}>09:30 AM</Text>
                                <Text style={styles.timeText}>10:00 AM</Text>
                                <Text style={styles.timeText}>10:30 AM</Text>
                                <Text style={styles.timeText}>11:00 AM</Text>
                                <Text style={styles.timeText}>11:30 AM</Text>
                                <Text style={styles.timeText}>12:00 PM</Text>
                                <Text style={styles.timeText}>12:30 PM</Text>
                                <Text style={styles.timeText}>01:00 PM</Text>
                                <Text style={styles.timeText}>01:30 PM</Text>
                                <Text style={styles.timeText}>02:00 PM</Text>
                                <Text style={styles.timeText}>02:30 PM</Text>
                                <Text style={styles.timeText}>03:00 PM</Text>
                                <Text style={styles.timeText}>03:30 PM</Text>
                                <Text style={styles.timeText}>04:00 PM</Text>
                                <Text style={styles.timeText}>04:30 PM</Text>
                                <Text style={styles.timeText}>05:00 PM</Text>
                                <Text style={styles.timeText}>05:30 PM</Text>
                                <Text style={styles.timeText}>06:00 PM</Text>
                            </View>
                            <View style={styles.line1}>
                                <TouchableOpacity style={styles.line1content1}>
                                    <Text style={styles.contentText}>EURO 2024 HIGHLIGHTS</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line1content2}>
                                    <Text style={styles.contentText}>Studio Show Live</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line1content3}>
                                    <Text style={styles.contentText}>Bundeshliga Special</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line1content4}>
                                    <Text style={styles.contentText}>England vs India 2023</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line1content5}>
                                    <Text style={styles.contentText}>UEFA EURO 2024 Special Countdown</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line1content5}>
                                    <Text style={styles.contentText}>UEFA EURO 2024 Special Countdown</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line1content5}>
                                    <Text style={styles.contentText}>UEFA EURO 2024 Special Countdown</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line1content5}>
                                    <Text style={styles.contentText}>UEFA EURO 2024 Special Countdown</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.line2}>
                                <TouchableOpacity onPress={() => navigation.navigate('SonySab')} style={styles.line2content1}>
                                    <Text style={styles.contentText}>Tarak Mehta Ka Ultaa Chashma </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line2content2}>
                                    <Text style={styles.contentText}>Radha Mohan</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line2content3}>
                                    <Text style={styles.contentText}>Pyaar Ka Pehla Adhyay: Shiv Shakti</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line2content4}>
                                    <Text style={styles.contentText}>Kundali Bhagya</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line1content5}>
                                    <Text style={styles.contentText}>UEFA EURO 2024 Special Countdown</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line1content5}>
                                    <Text style={styles.contentText}>UEFA EURO 2024 Special Countdown</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line2content2}>
                                    <Text style={styles.contentText}>POR vs ARG HIGHLIGHTS</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line1content5}>
                                    <Text style={styles.contentText}>UEFA EURO 2024 Special Countdown</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.line3}>
                                <TouchableOpacity style={styles.line3content1}>
                                    <View style={{ position: 'absolute', left: 0, width: 100, alignItems: 'center', backgroundColor: 'red', height: '100%', borderTopStartRadius: 10, borderBottomStartRadius: 10, justifyContent: 'center' }}>
                                        <Text style={{ color: 'white', fontWeight: '900' }}>ख़बर दिन भर</Text>
                                    </View>
                                    <Text style={styles.contentText}>KHABAR DIN BHAR</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line3content2}>
                                    <Text style={styles.contentText}>NoitaVonne</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line3content3}>
                                    <Text style={styles.contentText}>POR vs ARG HIGHLIGHTS</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line3content4}>
                                    <Text style={styles.contentText}>NoitaVonne</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line1content5}>
                                    <Text style={styles.contentText}>UEFA EURO 2024 Special Countdown</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line1content5}>
                                    <Text style={styles.contentText}>UEFA EURO 2024 Special Countdown</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line2content2}>
                                    <Text style={styles.contentText}>POR vs ARG HIGHLIGHTS</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line1content5}>
                                    <Text style={styles.contentText}>UEFA EURO 2024 Special Countdown</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.line4}>
                                <TouchableOpacity style={styles.line1content1}>
                                    <Text style={styles.contentText}>POR vs ARG HIGHLIGHTS</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line1content2}>
                                    <Text style={styles.contentText}>NoitaVonne</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line1content3}>
                                    <Text style={styles.contentText}>NoitaVonne</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line1content4}>
                                    <Text style={styles.contentText}>NoitaVonne</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line1content5}>
                                    <Text style={styles.contentText}>NoitaVonne</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line1content4}>
                                    <Text style={styles.contentText}>NoitaVonne</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line2content2}>
                                    <Text style={styles.contentText}>POR vs ARG HIGHLIGHTS</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line1content5}>
                                    <Text style={styles.contentText}>UEFA EURO 2024 Special Countdown</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line2content2}>
                                    <Text style={styles.contentText}>POR vs ARG HIGHLIGHTS</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line1content5}>
                                    <Text style={styles.contentText}>UEFA EURO 2024 Special Countdown</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.line5}>
                                <TouchableOpacity style={styles.line1content1}>
                                    <Text style={styles.contentText}>POR vs ARG HIGHLIGHTS</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line1content2}>
                                    <Text style={styles.contentText}>NoitaVonne</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line1content3}>
                                    <Text style={styles.contentText}>NoitaVonne</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line1content4}>
                                    <Text style={styles.contentText}>NoitaVonne</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line1content5}>
                                    <Text style={styles.contentText}>NoitaVonne</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line1content4}>
                                    <Text style={styles.contentText}>NoitaVonne</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line2content2}>
                                    <Text style={styles.contentText}>POR vs ARG HIGHLIGHTS</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line2content2}>
                                    <Text style={styles.contentText}>POR vs ARG HIGHLIGHTS</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line2content2}>
                                    <Text style={styles.contentText}>POR vs ARG HIGHLIGHTS</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line1content5}>
                                    <Text style={styles.contentText}>UEFA EURO 2024 Special Countdown</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.line6}>
                                <TouchableOpacity style={styles.line2content1}>
                                    <Text style={styles.contentText}>POR vs ARG HIGHLIGHTS</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line2content2}>
                                    <Text style={styles.contentText}>POR vs ARG HIGHLIGHTS</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line2content3}>
                                    <Text style={styles.contentText}>POR vs ARG HIGHLIGHTS</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line2content4}>
                                    <Text style={styles.contentText}>NoitaVonne</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line1content5}>
                                    <Text style={styles.contentText}>NoitaVonne</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line1content5}>
                                    <Text style={styles.contentText}>NoitaVonne</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line2content2}>
                                    <Text style={styles.contentText}>POR vs ARG HIGHLIGHTS</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line1content5}>
                                    <Text style={styles.contentText}>UEFA EURO 2024 Special Countdown</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.line7}>
                                <TouchableOpacity style={styles.line1content1}>
                                    <Text style={styles.contentText}>POR vs ARG HIGHLIGHTS</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line1content2}>
                                    <Text style={styles.contentText}>NoitaVonne</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line1content3}>
                                    <Text style={styles.contentText}>NoitaVonne</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line1content4}>
                                    <Text style={styles.contentText}>NoitaVonne</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line1content5}>
                                    <Text style={styles.contentText}>NoitaVonne</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line1content4}>
                                    <Text style={styles.contentText}>NoitaVonne</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line2content2}>
                                    <Text style={styles.contentText}>POR vs ARG HIGHLIGHTS</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line2content2}>
                                    <Text style={styles.contentText}>POR vs ARG HIGHLIGHTS</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line2content2}>
                                    <Text style={styles.contentText}>POR vs ARG HIGHLIGHTS</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line1content5}>
                                    <Text style={styles.contentText}>UEFA EURO 2024 Special Countdown</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </ScrollView>
        </View>
    )
}

export default Home;