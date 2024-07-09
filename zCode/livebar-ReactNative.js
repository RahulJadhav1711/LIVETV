import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import Video from "react-native-video";
import styles from "./styledemo2";

const Application = (props) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update the current time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute
    return () => clearInterval(timer);
  }, []);

  // Function to get the current time in hh:mm AM/PM format
  const getCurrentTimeString = () => {
    return currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
  };

  // Function to calculate the position of the live timing bar
  const getTimingBarPosition = () => {
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const totalMinutes = hours * 60 + minutes;
    const startHour = 7 * 60; // 07:00 am in minutes
    const endHour = 24 * 60; // 12:00 am in minutes (next day)

    if (totalMinutes < startHour) return 0;
    if (totalMinutes > endHour) return "100%";

    const timeSlots = endHour - startHour; // Total minutes in the visible timeline
    const position = ((totalMinutes - startHour) / timeSlots) * 100;
    return `${position}%`;
  };

  return (
    <ScrollView>
      <View>
        <View style={styles.container}>
          <Image style={{ height: 45, width: 45, tintColor: 'white' }} source={require('./assets/images/SiloTV.png')} />
          <Text style={{ fontSize: 26, color: 'white', marginTop: 4 }}>
            SiloTV
          </Text>
          <TouchableOpacity style={{ position: "absolute", right: 0, marginRight: 5 }}>
            <Image style={{ height: 35, width: 33, tintColor: 'white' }} source={require('./assets/images/Search.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={{ position: 'absolute', right: 0, marginRight: 50 }}>
            <Image style={{ height: 32, width: 33, tintColor: 'white' }} source={require('./assets/images/usericon.png')} />
          </TouchableOpacity>
        </View>
        <Text style={{ marginTop: 5, fontSize: 22, color: 'black', fontWeight: '1000' }}>
          India Vs Pakistan Highlights
        </Text>
        <View style={{ height: 250, width: 420, marginTop: 0, backgroundColor: 'black' }}>
          <Video style={{ height: '100%', width: '100%' }} controls={true} source={require('./assets/videos/Indvspak.mp4')} />
        </View>
        <View style={{ marginTop: 5 }}>
          <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold', marginLeft: 5, marginTop: 5 }}>Live Channels</Text>
          <TouchableOpacity style={{ position: 'absolute', right: 0, marginRight: 8, marginTop: 5 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'red' }}>
              Live
            </Text>
          </TouchableOpacity>
        </View>

        {/* View showing the current time */}
        <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'center' }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white', backgroundColor: 'black', padding: 5, borderRadius: 5 }}>
            {getCurrentTimeString()}
          </Text>
        </View>

        <ScrollView>
          <View style={{ flexDirection: 'row', marginTop: 10, backgroundColor: '#333333' }}>
            <View>
              <ScrollView style={{ width: 95, marginTop: 25, marginLeft: 5 }}>
                <TouchableOpacity>
                  <Image style={styles.livechannel} source={require('./assets/images/ajj.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image style={styles.livechannel} source={require('./assets/images/zee2.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image style={styles.livechannel} source={require('./assets/images/indiaTvlogo.jpg')} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image style={styles.livechannel} source={require('./assets/images/abp2.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image style={styles.livechannel} source={require('./assets/images/sony.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image style={styles.livechannel} source={require('./assets/images/stargold.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image style={styles.livechannel} source={require('./assets/images/cineplix.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image style={styles.livechannel} source={require('./assets/images/starsports.png')} />
                </TouchableOpacity>
              </ScrollView>
            </View>

            <ScrollView horizontal={true} style={{ marginLeft: 2 }}>
              <View style={{ flexDirection: 'row', height: 'auto', marginTop: 25 }}>
                <Text style={{ borderLeftWidth: 2, color: 'white', paddingLeft: 10, fontWeight: 'bold', textAlign: 'center', borderColor: 'white', width: 225 }}>07:00 am</Text>
                <Text style={styles.textlive}>08:00 am</Text>
                <Text style={styles.textlive}>09:00 am</Text>
                <Text style={styles.textlive}>10:00 am</Text>
                <Text style={styles.textlive}>11:00 am</Text>
                <Text style={styles.textlive}>12:00 pm</Text>
                <Text style={styles.textlive}>01:00 pm</Text>
                <Text style={styles.textlive}>02:00 pm</Text>
                <Text style={styles.textlive}>03:00 pm</Text>
                <Text style={styles.textlive}>04:00 pm</Text>
                <Text style={styles.textlive}>05:00 pm</Text>
                <Text style={styles.textlive}>06:00 pm</Text>
                <Text style={styles.textlive}>07:00 pm</Text>
                <Text style={styles.textlive}>08:00 pm</Text>
                <Text style={styles.textlive}>09:00 pm</Text>
                <Text style={styles.textlive}>10:00 pm</Text>
                <Text style={styles.textlive}>11:00 pm</Text>
                <Text style={styles.textlive}>12:00 am</Text>

                {/* Live timing bar */}
                <View style={{
                  position: 'absolute',
                  top: 0,
                  left: getTimingBarPosition(),
                  height: '100%', // Make the height cover 100% of its parent
                  width: 2,
                  backgroundColor: 'red',
                  zIndex: 20,
                }} />
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, zIndex: 10, top: 50, left: -80, position: 'absolute' }}>
                {/* <TouchableOpacity onPress={() => props.navigation.navigate('Ajjtak')}>
                  <Text style={styles.newsText}>
                    News
                  </Text>
                </TouchableOpacity> */}
                <Text style={styles.newsText3}>
                  News Debate
                </Text>
                <Text style={styles.newsText2}>
                  Khabardar
                </Text>
                <Text style={styles.newsText2}>
                  Motivation
                </Text>
                <Text style={styles.newsText2}>
                  Taza Khabar
                </Text>
                <Text style={styles.newsText2}>
                  Counselling
                </Text>
                <Text style={styles.newsText2}>
                  News
                </Text>
                <Text style={styles.newsText2}>
                  Khabardar
                </Text>
                <Text style={styles.newsText2}>
                  Motivation
                </Text>
                <Text style={styles.newsText2}>
                  Taza Khabar
                </Text>
                <Text style={styles.newsText2}>
                  Counselling
                </Text>
              </View>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default Application;
