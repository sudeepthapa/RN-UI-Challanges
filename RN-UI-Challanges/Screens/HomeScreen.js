

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



