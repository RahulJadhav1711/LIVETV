import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Home from "../screens/Home/Home";
import SubPage from "../screens/SubPage/SubPage";
import Nav from "../screens/components/Nav/Nav";
// import BottomTab from "../screens/components/BottomNav/BottomNav";
// import SubPage1 from "../screens/Settings/Settings";
import Splash from "../screens/Splash/Splash";
import LiveStream from "../screens/liveStream/liveStream";
import SonySab from "../screens/sonySab/SonySab";
import Login from "../screens/Login/Login";
import Register from "../screens/Register/Register";
import Tabs from "./bottomTab";
import Forget from "../screens/forget/Forget";

const Stack = createNativeStackNavigator();


const AppNav = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash">
                <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={Tabs} options={{ headerShown: false }} />
                <Stack.Screen name="SubPage" component={SubPage} options={{ headerShown: false }} />
                <Stack.Screen name="liveStream" component={LiveStream} options={{ headerShown: false }} />
                <Stack.Screen name="SonySab" component={SonySab} options={{ headerShown: false }} />
                <Stack.Screen name="Forget" component={Forget} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNav;