import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../Screens/LoginRegister/LoginScreen';
import RegisterScreen from '../Screens/LoginRegister/RegisterScreen';
import HomeScreen from '../Screens/HomeScreen';

const Stack=createStackNavigator()

const RootNavigation=()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={HomeScreen} options={{headerShown:false}}/>
                <Stack.Screen name='Login' component={LoginScreen} />
                <Stack.Screen name='Register' component={RegisterScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigation
