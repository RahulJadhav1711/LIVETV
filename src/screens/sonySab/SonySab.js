import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, Dimensions, ScrollView } from "react-native";
import styles from './Style';
import Video from "react-native-video";
import Nav from "../components/Nav/Nav";

const width = Dimensions.get('screen').width;
// const height = Dimensions.get('screen').height;

const SonySab = ({ navigation }) => {
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
                <Video source={require('../../assets/singleLife.mp4')}
                    style={styles.video}
                    muted
                    controls={true} />
                <View style={styles.titleLine}>
                    <Text style={styles.title}>Why Hasn't Tim Slept With Luisa? | 90 Day: The Single Life | TLC</Text>
                    <View style={styles.discLine}>
                        <Text style={styles.disc}>Disciption : The Single Life</Text>
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
                            <Text style={styles.disc1}>The Tell All heats up as everyone lays into Tim for his lack of physical affection towards Luisa.</Text>
                        </View>
                        : null}

                </View>
                <View style={styles.addFavLine}>
                    <Image style={styles.sonyImg} source={require('../../assets/tlc.png')} />
                    <Text style={styles.sonyText}>The Learning Channel</Text>
                    <View style={styles.addFavView}>
                        <Text style={styles.addFavText}>Add To Fav</Text>
                        <TouchableOpacity onPress={() => setFill(!fill)}>
                            <Image style={fill ? styles.like : styles.like1} source={fill ? require('../../assets/like.png') : require('../../assets/likeRed.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.relatedView}>
                    <Text style={styles.relatesLineText}>Top Related Videos</Text>
                </View>
                <View style={styles.scrollCon}>
                    <ScrollView>
                        <View style={styles.line1}>
                            <View style={{ width: '50%' }}>
                                <TouchableOpacity style={{ marginLeft: 10, width: '90%' }}>
                                    <Image style={styles.tmkoc1Img} source={require('../../assets/single1.jpg')} />
                                    <Text style={styles.tmkoc1Text}>90 Day Fiancé: The Other Way Cast Announced for Season 3: See the Couples</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ width: '50%' }}>
                                <TouchableOpacity style={{ marginLeft: 10, width: '90%' }}>
                                    <Image style={styles.tmkoc1Img} source={require('../../assets/s2.jpg')} />
                                    <Text style={{ color: 'white' }}>The '90 Day Fiancé' cast member you are based on your zodiac sign</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ width: width, marginTop: '2%', flexDirection: 'row' }}>
                            <View style={{ width: '50%' }}>
                                <TouchableOpacity style={{ marginLeft: 10, width: '90%' }}>
                                    <Image style={styles.tmkoc1Img} source={require('../../assets/s3.jpg')} />
                                    <Text style={styles.tmkoc1Text}>90 Day Fiancé: The Other Way Cast Announced for Season 3: See the Couples</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ width: '50%' }}>
                                <TouchableOpacity style={{ marginLeft: 10, width: '90%' }}>
                                    <Image style={styles.tmkoc1Img} source={require('../../assets/s4.jpg')} />
                                    <Text style={{ color: 'white' }}>The '90 Day Fiancé' cast member you are based on your zodiac sign</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ width: width, marginTop: '2%', flexDirection: 'row' }}>
                            <View style={{ width: '50%' }}>
                                <TouchableOpacity style={{ marginLeft: 10, width: '90%' }}>
                                    <Image style={styles.tmkoc1Img} source={require('../../assets/s5.jpg')} />
                                    <Text style={styles.tmkoc1Text}>90 Day Fiancé: The Other Way Cast Announced for Season 3: See the Couples</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ width: '50%' }}>
                                <TouchableOpacity style={{ marginLeft: 10, width: '90%' }}>
                                    <Image style={styles.tmkoc1Img} source={require('../../assets/s6.jpg')} />
                                    <Text style={{ color: 'white' }}>The '90 Day Fiancé' cast member you are based on your zodiac sign</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </View>
    )
}

export default SonySab;
