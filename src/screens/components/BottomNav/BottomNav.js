import React from "react";
import { View, Text, TouchableOpacity, Image, Settings, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SubPage from "../../SubPage/SubPage";
import Setting from "../../Settings/Settings";
import Chat from "../../Splash/Splash";

const Tab = createBottomTabNavigator();

const BottomTab = () => {

    const style = StyleSheet.create({
        shadow: {
            shadowColor: '#7F5DF0',
            shadowOffset: {
                width: 0,
                height: 10,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.5,
            elevation: 0,
        }
    })
    return (
        <Tab.Navigator screenOptions={{
            tabBarStyle: { position: 'absolute', backgroundColor: 'white', bottom: 15, left: 20, right: 20, borderRadius: 15, height: 70, ...style.shadow },
            tabBarShowLabel: false,

        }}>
            <Tab.Screen name="SubPage" component={SubPage} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', top: 5 }}>
                        <Image source={require('../../../assets/home.png')}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? "#e32f45" : "#748c94",
                            }}
                        />
                        <Text style={{
                            color: focused ? "#e32f45" : "#748c94",
                            fontSize: 12
                        }}>
                            Home
                        </Text>
                    </View>
                )
            }}
            />
            <Tab.Screen name="Setting" component={Setting} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', top: 5 }}>
                        <Image source={require('../../../assets/home.png')}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? "#e32f45" : "#748c94",
                            }}
                        />
                        <Text style={{
                            color: focused ? "#e32f45" : "#748c94",
                            fontSize: 12
                        }}>
                            Settings
                        </Text>
                    </View>
                )
            }}/>
             <Tab.Screen name="Chat" component={Chat} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', top: 5 }}>
                        <Image source={require('../../../assets/home.png')}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? "#e32f45" : "#748c94",
                            }}
                        />
                        <Text style={{
                            color: focused ? "#e32f45" : "#748c94",
                            fontSize: 12
                        }}>
                            Chat
                        </Text>
                    </View>
                )
            }}/> 

        </Tab.Navigator>
    )
}

export default BottomTab;