import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home/Home";

import Setting from "../screens/Settings/Settings";
import {View, Text, Image } from "react-native";
import SubPage from "../screens/SubPage/SubPage";
import Notification from "../screens/Notification/Notification";
import Premium from "../screens/Premium/Premium";

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator screenOptions={{
            tabBarShowLabel:false,
            tabBarStyle: {
                backgroundColor: 'black',
            }
            }}>
            <Tab.Screen name="Home1" component={Home} options={{ 
                headerShown: false, 
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 5}}>
                        <Image 
                        source={require('../assets/home.png')}
                        resizeMode="contain"
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: focused ? "#e32f45" : "#748c94"
                        }}
                        />
                        <Text style={{
                            color: focused ? "#e32f45" : "#748c94"}}>Home</Text>
                    </View>
                ) 
                }}/>
            <Tab.Screen name="Notification" component={Notification} options={{ 
                headerShown: false, 
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 5}}>
                        <Image 
                        source={require('../assets/bell.png')}
                        resizeMode="contain"
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: focused ? "#e32f45" : "#748c94"
                        }}
                        />
                        <Text style={{
                            color: focused ? "#e32f45" : "#748c94"}}>Notifications</Text>
                    </View>
                ) 
                }}/>
            <Tab.Screen name="Premium" component={Premium} options={{ 
                headerShown: false, 
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 5}}>
                        <Image 
                        source={require('../assets/premium.png')}
                        resizeMode="contain"
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: focused ? "#e32f45" : "#748c94"
                        }}
                        />
                        <Text style={{
                            color: focused ? "#e32f45" : "#748c94"}}>Premium</Text>
                    </View>
                ) 
                }}/>
            <Tab.Screen name="Setting" component={Setting} options={{ 
                headerShown: false, 
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center',top: 5}}>
                        <Image 
                        source={require('../assets/user.png')}
                        resizeMode="contain"
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: focused ? "#e32f45" : "#748c94"
                        }}
                        />
                        <Text style={{
                            color: focused ? "#e32f45" : "#748c94"}}>Profile</Text>
                    </View>
                ) 
                }}/>
        </Tab.Navigator>
    )
}

export default Tabs;