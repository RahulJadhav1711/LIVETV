import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from './Style';
import Video from "react-native-video";
import Nav from "../components/Nav/Nav";

const LiveStream = ({ navigation }) => {
    const [show, setShow] = useState(false);
    const [fill, setFill] = useState(true);


    return (
        <View style={styles.container}>
            <View style={styles.nav}>
                <Image style={styles.youtubeIcon} source={require('../../../src/assets/logo1.jpg')} />
                <Text style={styles.heading}>SILO TV</Text>
                <TouchableOpacity style={styles.notiView}>
                    <Image style={styles.notiIcon} source={require('../../../src/assets/noti.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.videoCon}>
                <Video source={{ uri: 'http://content.jwplatform.com/manifests/vM7nH0Kl.m3u8' }}
                    style={styles.video}
                    // muted    
                    controls={true} />
                <View style={styles.titleLine}>
                    <Text style={styles.title}>LIVE STREAM</Text>
                    <View style={styles.discLine}>
                        <Text style={styles.disc}>Disciption : On 16 May 2024. The England Is Ready</Text>
                        {show ?
                            <TouchableOpacity onPress={() => setShow(false)} style={styles.discArrow}>
                                <Image style={styles.discArrowImg1} source={require('../../assets/downArrow.png')} />
                            </TouchableOpacity>
                            :
                            <TouchableOpacity onPress={() => setShow(true)} style={styles.discArrow}>
                                <Image style={styles.discArrowImg} source={require('../../assets/downArrow.png')} />
                            </TouchableOpacity>}
                    </View>
                    {show ?
                        <View style={styles.discLast}>
                            <Text style={styles.disc1}>England rolled into the Euros having logged the most collective minutes of any team in the tournament this past season, but it didn't look fatigued in the slightest, as Jude Bellingham got the ball rolling with a goal in the 13th minute to tick momentum in its direction. </Text>
                        </View>
                        : null}

                </View>
                <View style={styles.addFavLine}>
                    {/* <Image style={styles.sonyImg} source={require('../../assets/zee.jpg')} /> */}
                    <Text style={styles.sonyText}>ZEE TV</Text>
                    <View style={{ position: 'absolute', right: 5, flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ color: 'white', fontWeight: '700', marginRight: 10 }}>Add To Fav</Text>
                        <TouchableOpacity onPress={() => setFill(!fill)}>
                            <Image style={fill ? styles.like : styles.like1} source={fill ? require('../../assets/like.png') : require('../../assets/likeRed.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.relatedView}>
                    <Text style={{ color: 'white', fontWeight: '700', marginRight: 10, marginLeft: 10, fontSize: 20 }}>Top Related Videos</Text>
                </View>
            </View>
        </View>
    )
}

export default LiveStream;