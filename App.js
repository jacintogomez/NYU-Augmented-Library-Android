import 'react-native-gesture-handler';
import React from 'react';
import {Routes,Route} from 'react-router-dom';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import { WelcomeScreen, Services, About,SignIn,Explore, ReserveScreen, ARVision, PickTime } from "./index";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RoomReservationStack from "./ScreenStacks/RoomReservationStack";
import Icon from "react-native-vector-icons/AntDesign";
import Navbar from './screens/components/Navbar';


const App = () => {
 return (
    <>
       <Navbar />
       <Routes>
          <Route path="/" element={<WelcomeScreen />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/explore" element={<Explore />} />
       </Routes>
    </>
 );
};

export default App;






