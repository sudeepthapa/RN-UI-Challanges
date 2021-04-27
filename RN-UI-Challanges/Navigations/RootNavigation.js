import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../Screens/LoginRegister/LoginScreen';
import RegisterScreen from '../Screens/LoginRegister/RegisterScreen';
import HomeScreen from '../Screens/HomeScreen';
import ProfileScreen from '../Screens/SettingAndProfile/ProfileScreen';
import SettingScreen from '../Screens/SettingAndProfile/SettingScreen';
import ProductDetails from '../Screens/E-commerce/ProductDetails';

const Stack=createStackNavigator()

const RootNavigation=()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={HomeScreen} options={{headerShown:false}}/>
                <Stack.Screen name='Login' component={LoginScreen} />
                <Stack.Screen name='Register' component={RegisterScreen} />

                <Stack.Screen name='Profile' component={ProfileScreen} />
                <Stack.Screen name='Setting' component={SettingScreen} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigation
