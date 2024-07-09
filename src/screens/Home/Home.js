import React, { useState, useEffect, useRef } from "react";
import { Text, View, Image, TouchableOpacity, ScrollView, Dimensions, TextInput } from "react-native";
import styles from './Style';
import Video from "react-native-video";
import Nav from "../components/Nav/Nav";
import Tabs from "../../navigation/bottomTab";

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
                <Video source={require('../../assets/wild.mp4')}
                    style={styles.video}
                    muted
                    controls={true} />
                    <Text style={styles.videoDiscText}>Wild Wild America - Promo | Every Monday at 9 PM | Animal Planet America</Text>
            </View>
            <TouchableOpacity style={styles.liveLine}>
                <Text style={styles.liveTex}>LIVE CHANNELS •</Text>
            </TouchableOpacity>
            <ScrollView>
                <View style={{ flexDirection: 'row', height: '100%', marginTop: '5%' }}>
                    <View>
                        <TouchableOpacity onPress={scrollToCurrentTimePosition} style={styles.liveTextView}>
                            <Text style={styles.liveText}>• Live</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('SubPage')} style={styles.img1View}>
                            <Image style={styles.img1} source={require('../../assets/foxNews.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('liveStream')} style={styles.img2View}>
                            <Image style={styles.img2} source={require('../../assets/tlc.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.img2View}>
                            <Image style={styles.img2} source={require('../../assets/grit.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.img2View}>
                            <Image style={styles.img2} source={require('../../assets/animalPlanet.jpg')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.img2View}>
                            <Image style={styles.img2} source={require('../../assets/bravo.webp')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.img2View}>
                            <Image style={styles.img2} source={require('../../assets/cc.jpg')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.img2View}>
                            <Image style={styles.img2} source={require('../../assets/axs.webp')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.img2View}>
                            <Image style={styles.img2} source={require('../../assets/HGTV.png')} />
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
                                    <Text style={styles.contentText}>The Five</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line1content2}>
                                    <Text style={styles.contentText}>FOX and Friends</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line1content3}>
                                    <Text style={styles.contentText}>FOX and Friends</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line1content4}>
                                    <Text style={styles.contentText}>America's Newsroom</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line1content5}>
                                    <Text style={styles.contentText}>Big Independence Day Special</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line1content5}>
                                    <Text style={styles.contentText}>The Faulkner Focus</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line1content5}>
                                    <Text style={styles.contentText}>Hannity</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line1content5}>
                                    <Text style={styles.contentText}>Big Independence Day Special</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.line2}>
                                <TouchableOpacity onPress={() => navigation.navigate('SonySab')} style={styles.line2content1}>
                                    <Text style={styles.contentText}>90 Day: The Single Life</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line2content2}>
                                    <Text style={styles.contentText}>Take My Tumor</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line2content3}>
                                    <Text style={styles.contentText}>90 Day: The Single Life</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line2content4}>
                                    <Text style={styles.contentText}>Unexpected</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line1content5}>
                                    <Text style={styles.contentText}>The Jennifer Hudson Show</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line1content5}>
                                    <Text style={styles.contentText}>90 Day: The Single Life</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line2content2}>
                                    <Text style={styles.contentText}>Unexpected</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line1content5}>
                                    <Text style={styles.contentText}>90 Day: The Single Life</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.line3}>
                                <TouchableOpacity style={styles.line3content1}>
                                    {/* <View style={{ position: 'absolute', left: 0, width: 100, alignItems: 'center', backgroundColor: 'red', height: '100%', borderTopStartRadius: 10, borderBottomStartRadius: 10, justifyContent: 'center' }}>
                                        <Text style={{ color: 'white', fontWeight: '900' }}>ख़बर दिन भर</Text>
                                    </View> */}
                                    <Text style={styles.contentText}>Return of the Seven</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line3content2}>
                                    <Text style={styles.contentText}>Return of the Seven</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line3content3}>
                                    <Text style={styles.contentText}>Shark CarpetXpertTM</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line3content4}>
                                    <Text style={styles.contentText}>Guns of the Magnificent Seven</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line1content5}>
                                    <Text style={styles.contentText}>Guns of the Magnificent Seven</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line1content5}>
                                    <Text style={styles.contentText}>House Stealing - The Latest Cyberthreat</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line2content2}>
                                    <Text style={styles.contentText}>Honeychile</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line1content5}>
                                    <Text style={styles.contentText}>House Stealing - The Latest Cyberthreat</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.line4}>
                                <TouchableOpacity style={styles.line1content1}>
                                    <Text style={styles.contentText}>Swamp Wars</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line1content2}>
                                    <Text style={styles.contentText}>Swamp Wars</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line1content3}>
                                    <Text style={styles.contentText}>Gator Boys</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line1content4}>
                                    <Text style={styles.contentText}>Gator Boys</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line1content5}>
                                    <Text style={styles.contentText}>Pets & Pickers</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line1content4}>
                                    <Text style={styles.contentText}>Pets & Pickers</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line2content2}>
                                    <Text style={styles.contentText}>The Zoo</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line1content5}>
                                    <Text style={styles.contentText}>Pit Bulls and Parolees</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line2content2}>
                                    <Text style={styles.contentText}>Pit Bulls and Parolees</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line1content5}>
                                    <Text style={styles.contentText}>Treehouse Masters</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.line5}>
                                <TouchableOpacity style={styles.line1content1}>
                                    <Text style={styles.contentText}>Below Deck</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line1content2}>
                                    <Text style={styles.contentText}>The Kelly Clarkson Show</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line1content3}>
                                    <Text style={styles.contentText}>The Kelly Clarkson Show</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line1content4}>
                                    <Text style={styles.contentText}>Below Deck</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line1content5}>
                                    <Text style={styles.contentText}>Below Deck</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line1content4}>
                                    <Text style={styles.contentText}>The Kelly Clarkson Show</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line2content2}>
                                    <Text style={styles.contentText}>The Kelly Clarkson Show</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line2content2}>
                                    <Text style={styles.contentText}>Below Deck</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line2content2}>
                                    <Text style={styles.contentText}>Below Deck</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line1content5}>
                                    <Text style={styles.contentText}>Below Deck</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.line6}>
                                <TouchableOpacity style={styles.line2content1}>
                                    <Text style={styles.contentText}>Comics Unleashed With Byron Allen</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line2content2}>
                                    <Text style={styles.contentText}>Weather Gone Viral</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line2content3}>
                                    <Text style={styles.contentText}>Comics Unleashed With Byron Allen</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line2content4}>
                                    <Text style={styles.contentText}>Comics Unleashed With Byron Allen</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line1content5}>
                                    <Text style={styles.contentText}>Weather Gone Viral</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line1content5}>
                                    <Text style={styles.contentText}>Weather Gone Viral</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line2content2}>
                                    <Text style={styles.contentText}>Paid Programming</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line1content5}>
                                    <Text style={styles.contentText}>UEFA EURO 2024 Special Countdown</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.line7}>
                                <TouchableOpacity style={styles.line1content1}>
                                    <Text style={styles.contentText}>Discover the Power of CBD</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line1content2}>
                                    <Text style={styles.contentText}>Discover the Power of CBD</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line1content3}>
                                    <Text style={styles.contentText}>Just for Laughs Gags</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line1content4}>
                                    <Text style={styles.contentText}>Discover the Power of CBD</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line1content5}>
                                    <Text style={styles.contentText}>Lose Your Crepey Skin! 65 Looks 45!</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line1content4}>
                                    <Text style={styles.contentText}>Just for Laughs Gags</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line2content2}>
                                    <Text style={styles.contentText}>Just for Laughs Gags</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line2content2}>
                                    <Text style={styles.contentText}>Discover the Power of CBD</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line2content2}>
                                    <Text style={styles.contentText}>Discover the Power of CBD</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.line1content5}>
                                    <Text style={styles.contentText}>Lose Your Crepey Skin! 65 Looks 45!</Text>
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