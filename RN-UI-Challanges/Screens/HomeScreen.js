

import React from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';
import { List,Colors  } from 'react-native-paper';


const HomeScreen=({navigation})=>{
    return(
        <View style={styles.container}>

            <List.Item
                title="Login and Register"
                description=""
                onPress={()=>navigation.navigate('Login')}
                left={props => <List.Icon {...props} color={Colors.blue500} icon="login" />}
            />

            <List.Item
                title="Profile and Setting"
                description=""
                onPress={()=>navigation.navigate('Profile')}
                left={props => <List.Icon {...props} color={Colors.blue500} icon="account-details" />}
            />








        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
});


export default HomeScreen;



