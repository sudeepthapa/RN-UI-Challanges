import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';



const SettingScreen =({navigation})=>{
    return <View style={styles.container}>
        <View style={styles.body}>
            <View style={{alignItems:'center',marginTop:10,}}>
                {/*<View style={{ width: '50%' }}>*/}
                {/*    <View style={styles.v1}>*/}
                <Text style={styles.v2}>Settings</Text>
                {/*</View>*/}
                {/*</View>*/}
            </View>

        </View>


        <View style={{marginHorizontal:20}}>
            <View style={styles.row}>
                <MaterialCommunityIcons name="account" color="black" size={20}/>
                <Text style={{color:"black", marginLeft: 20, fontSize:20}}>Account</Text>
            </View>
            <View style={styles.row}>
                <MaterialIcons name="notifications-on" color="black" size={20}/>
                <Text style={{color:"black", marginLeft: 20, fontSize:20}}>Notifications</Text>
            </View>
            <View style={styles.row}>
                <MaterialCommunityIcons name="eye" color="black" size={20}/>
                <Text style={{color:"black", marginLeft: 20, fontSize:20}}>Appearance</Text>
            </View>
            <View style={styles.row}>
                <MaterialCommunityIcons name="lock-outline" color="black" size={20}/>
                <Text style={{color:"black", marginLeft: 20, fontSize:20}}>Privacy & Security</Text>
            </View>
            <View style={styles.row}>
                <Fontisto name="headphone" color="black" size={20}/>
                <Text style={{color:"black", marginLeft: 20, fontSize:20}}>Help and Support</Text>
            </View>
            <View style={styles.row}>
                <MaterialCommunityIcons name="help-circle-outline" color="black" size={20}/>
                <Text style={{color:"black", marginLeft: 20, fontSize:20}}>About</Text>
            </View>

        </View>
    </View>
}
const styles=StyleSheet.create({
    container:{
        flex:1,

    },
    body: {
        backgroundColor: 'grey',
        // height: '10%',
        height:60,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        // paddingHorizontal: 20,
    },
    v1: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        width: '100%',
        justifyContent:'center',

    },
    v2: {
        fontSize: 28,
        color: '#fff',
        fontWeight: 'bold',
    },
    row: {
        marginTop:40,
        flexDirection: 'row',

        alignItems:'center',

    },

})
export default SettingScreen;
