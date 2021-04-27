

import React from 'react';
import {View,StyleSheet,ScrollView,StatusBar,TouchableOpacity} from 'react-native';
import { Form, Item, Input, Label, Text } from 'native-base';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';




const RegisterScreen=({navigation})=>{
    const [fullName, setFullName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');

    return(
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <KeyboardAwareScrollView style={{flex: 1, width:'100%'}}
                                     keyboardShouldPersistTaps='always'>
                <View style={{height:150,backgroundColor: '#7d35fe',borderBottomRightRadius:15,borderBottomLeftRadius:15}}>
                    <View style={{alignItems:'center',justifyContent:'center',marginTop:40,}}>
                        <Text style={{fontSize:29,fontWeight:'bold',color:'white'}}>Sign up</Text>
                        <Text style={{fontSize:17,color:'white',opacity:0.7}}>Create a new account</Text>
                    </View>
                </View>

                <View style={{margin:8}}>
                    <View style={{width:'100%',backgroundColor:'#fff',borderRadius:15,elevation:5}}>
                        <Form>

                            <Item floatingLabel>
                                <Label>Full Name</Label>
                                <Input
                                    value={fullName}
                                    onChangeText={text => setFullName(text)}
                                />
                            </Item>

                            <Item floatingLabel>
                                <Label>Email</Label>
                                <Input
                                    value={email}
                                    onChangeText={text => setEmail(text)}
                                />
                            </Item>

                            <Item floatingLabel>
                                <Label>Phone</Label>
                                <Input
                                    value={phone}
                                    onChangeText={text => setPhone(text)}
                                />
                            </Item>

                            <Item floatingLabel>
                                <Label>Password</Label>
                                <Input
                                    value={password}
                                    secureTextEntry={true}
                                    onChangeText={text => setPassword(text)}
                                />
                            </Item>

                            <Item floatingLabel>
                                <Label>Confirm Password</Label>
                                <Input
                                    value={confirmPassword}
                                    secureTextEntry={true}
                                    onChangeText={text => setConfirmPassword(text)}
                                />
                            </Item>

                            <View style={{marginTop:50}}/>




                        </Form>
                    </View>
                </View>

                <View style={{marginHorizontal:10,marginTop:10,}}>
                    <View style={{height:50,width:'100%',backgroundColor: '#7d35fe',borderRadius:15,alignItems:'center',justifyContent:'center',elevation:5,}}>
                        <Text style={{color:'white',fontWeight:'bold',fontSize:23}}>SIGN UP</Text>
                    </View>
                </View>

                <View style={{alignItems:'center',justifyContent:'center',marginTop:10,}}>
                    <Text> Already have an account ? <Text onPress={()=>navigation.navigate('Login')} style={{color:'#7d35fe'}}>Sign in Now!</Text></Text>
                </View>

                <View style={{marginTop:40,}}/>






            </KeyboardAwareScrollView>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d9d9d9',
    },
});


export default RegisterScreen;



