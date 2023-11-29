import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { WelcomeScreen, Services, About,SignIn,Explore, ReserveScreen, ARVision, PickTime } from "./index";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RoomReservationStack from "./ScreenStacks/RoomReservationStack";
import Icon from "react-native-vector-icons/AntDesign";
import Navbar from './screens/components/Navbar';


const App = () => {
 return (
    <Navigationcontainer>
        <Stack.Navigator initialRouteName="Welcome">
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="Explore" component={Explore} />
        </Stack.Navigator>
    </Navigationcontainer>
 );
};

export default App;






