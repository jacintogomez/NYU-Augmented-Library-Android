import WelcomeScreen from "./Screens/WelcomeScreen";
import Services from "./Screens/Services";
import About from "./Screens/About";
import Explore from "./Screens/Explore";
import ReserveScreen from "./Screens/Reserve Screen/ReserveScreen";
import PickTime from "./Screens/Reserve Screen/PickTime";
import ARVision from "./Screens/ARVision";
import SignIn from "./Screens/SignIn/SignIn";
import WelcomeButton from "./Screens/components/welcomeComponent/WelcomeButton"

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
           <App />
        </BrowserRouter>
    </React.StrictMode>
);


export {
  WelcomeScreen,
  Services,
  About,
  Explore,
  ReserveScreen,
  ARVision,
  PickTime,
  SignIn
}
