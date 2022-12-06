import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HOME, SAVED, SETTINGS_SCR, PROFILE } from '../constants/routeNames';
import  Home  from '../screens/Home/'
import Profile from '../screens/Profile';
import Saved from '../screens/Saved';
import SettingsScr from '../screens/SettingsScr';


    const Tabs= createBottomTabNavigator()
    const Tab = () => {
    return (
        <Tabs.Navigator initialRouteName='Home'>
            <Tabs.Screen name={HOME} component={Home}></Tabs.Screen>
            <Tabs.Screen name={SAVED} component={Saved}></Tabs.Screen>
            <Tabs.Screen name={SETTINGS_SCR} component={SettingsScr}></Tabs.Screen>
            <Tabs.Screen name={PROFILE} component={Profile}></Tabs.Screen>
        </Tabs.Navigator>
    );
};
export default Tab;