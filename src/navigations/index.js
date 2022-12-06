import { NavigationContainer } from '@react-navigation/native';
import { Text, view } from 'react-native';
import React from 'react';
import AuthNavigator from './AuthNavigator';
import Tab from './BottomTabNavigator';

const AppNavContainer = () => {
    const isLoggedIn = true;
    return (
        <NavigationContainer>
            {isLoggedIn? <Tab/>:<AuthNavigator/>}
        </NavigationContainer>
    );
};

export default AppNavContainer;