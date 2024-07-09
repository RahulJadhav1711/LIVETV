import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, Dimensions, ScrollView } from "react-native";
import styles from './Style';
import Video from "react-native-video";
import Nav from "../components/Nav/Nav";

const width = Dimensions.get('screen').width;

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
                <Video source={require('../../assets/tmkoc.mp4')}
                    style={styles.video}
                    // muted
                    controls={true} />
                <View style={styles.titleLine}>
                    <Text style={styles.title}>Tarak Mehta Ka Ultaa Chashma</Text>
                    <View style={styles.discLine}>
                        <Text style={styles.disc}>Disciption : Taarak Mehta Ka Ooltah Chashmah</Text>
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
                            <Text style={styles.disc1}>The series takes place at the Gokuldham Co-operative Housing Society, an apartment complex in Powder Gali, Film City Road, Goregaon East, Mumbai, and focuses on the members of Gokuldham Society who come from different backgrounds.</Text>
                        </View>
                        : null}

                </View>
                <View style={styles.addFavLine}>
                    <Image style={styles.sonyImg} source={require('../../assets/sonySab.jpg')} />
                    <Text style={styles.sonyText}>SONY SAB HD</Text>
                    <View style={{ position: 'absolute', right: 5, flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ color: 'white', fontWeight: '700', marginRight: 10 }}>Add To Fav</Text>
                        <TouchableOpacity onPress={() => setFill(!fill)}>
                            <Image style={fill ? styles.like : styles.like1} source={fill ? require('../../assets/like.png') : require('../../assets/likeRed.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.relatedView}>
                    <Text style={styles.relatesLineText}>Top Related Videos</Text>
                </View>
                <View>
                    <View style={{ width: width, marginTop: '2%', flexDirection: 'row' }}>
                        <View style={{ width: '50%' }}>
                            <TouchableOpacity style={{ marginLeft: 10, width: 180 }}>
                                <Image style={{ width: '100%', height: 100, borderRadius: 5 }} source={require('../../assets/tmkoc1.jpg')} />
                                <Text style={{ color: 'white', marginTop: '2%' }}>Taarak Mehta Ka Ooltah Chashmah: Makers Introduce New ‘Tapu’...</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: '50%' }}>
                            <TouchableOpacity style={{ marginLeft: 10, width: 180 }}>
                                <Image style={{ width: '100%', height: 100, borderRadius: 5 }} source={require('../../assets/tmkoc3.jpg')} />
                                <Text style={{ color: 'white' }}>Taarak Mehta Ka Ooltah Chashmah | तारक मेहता | Ep 3003 & Ep 3004 | RECAP</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ width: width, marginTop: '2%', flexDirection: 'row' }}>
                        <View style={{ width: '50%' }}>
                            <TouchableOpacity style={{ marginLeft: 10, width: 180 }}>
                                <Image style={{ width: '100%', height: 100, borderRadius: 5 }} source={require('../../assets/tmkoc1.jpg')} />
                                <Text style={{ color: 'white', marginTop: '2%' }}>Taarak Mehta Ka Ooltah Chashmah: Makers Introduce New ‘Tapu’...</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: '50%' }}>
                            <TouchableOpacity style={{ marginLeft: 10, width: 180 }}>
                                <Image style={{ width: '100%', height: 100, borderRadius: 5 }} source={require('../../assets/tmkoc3.jpg')} />
                                <Text style={{ color: 'white' }}>Taarak Mehta Ka Ooltah Chashmah | तारक मेहता | Ep 3003 & Ep 3004 | RECAP</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ width: width, marginTop: '2%', flexDirection: 'row' }}>
                        <View style={{ width: '50%' }}>
                            <TouchableOpacity style={{ marginLeft: 10, width: 180 }}>
                                <Image style={{ width: '100%', height: 100, borderRadius: 5 }} source={require('../../assets/tmkoc1.jpg')} />
                                <Text style={{ color: 'white', marginTop: '2%' }}>Taarak Mehta Ka Ooltah Chashmah: Makers Introduce New ‘Tapu’...</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: '50%' }}>
                            <TouchableOpacity style={{ marginLeft: 10, width: 180 }}>
                                <Image style={{ width: '100%', height: 100, borderRadius: 5 }} source={require('../../assets/tmkoc3.jpg')} />
                                <Text style={{ color: 'white' }}>Taarak Mehta Ka Ooltah Chashmah | तारक मेहता | Ep 3003 & Ep 3004 | RECAP</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default SonySab;
