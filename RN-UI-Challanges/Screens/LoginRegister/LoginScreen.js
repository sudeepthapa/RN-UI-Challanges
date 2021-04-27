

import React from 'react';
import {View,StyleSheet,ScrollView,StatusBar,TouchableOpacity} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label,Button, Text } from 'native-base';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';



const LoginScreen=({navigation})=>{
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    return(
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <KeyboardAwareScrollView style={{flex: 1, width:'100%'}}
                                     keyboardShouldPersistTaps='always'>
            <View style={{height:150,backgroundColor: '#7d35fe',borderBottomRightRadius:15,borderBottomLeftRadius:15}}>
                <View style={{alignItems:'center',justifyContent:'center',marginTop:40,}}>
                    <Text style={{fontSize:29,fontWeight:'bold',color:'white'}}>Sign in</Text>
                    <Text style={{fontSize:17,color:'white',opacity:0.7}}>Login to your account</Text>
                </View>
            </View>

            <View style={{margin:8}}>
                <View style={{width:'100%',backgroundColor:'#fff',borderRadius:15,elevation:5}}>
                    <Form>

                        <Item floatingLabel>
                            <Label>Email</Label>
                            <Input
                                keyboardType='email-address'
                                value={email}
                                onChangeText={text => setEmail(text)}
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


                        <TouchableOpacity style={{margin:15,}}>
                            <Button rounded style={{width:'100%',backgroundColor: '#7d35fe',alignItems:'center',justifyContent:'center',marginTop:20,}}>
                                <Text style={{fontWeight:'bold',fontSize:20,}}>Login</Text>
                            </Button>
                        </TouchableOpacity>


                        <View style={{alignItems:'center',justifyContent:'center'}}>
                            <Text> Don't you have account ? <Text onPress={()=>navigation.navigate('Register')} style={{color:'#7d35fe'}}>Sign up Now!</Text></Text>
                        </View>

                        <View style={{flexDirection:'row',marginTop:30,}}>
                            <View style={{opacity:0.4,height:2,backgroundColor:'#7d35fe',flex: 1,width:'100%',marginTop:10, }}/>
                            <Text style={{marginHorizontal:10,color:'#7d35fe'}}>OR</Text>
                            <View style={{opacity:0.4,height:2,backgroundColor:'#7d35fe',flex: 1,width:'100%',marginTop:10, }}/>
                        </View>
                    </Form>

                        <View style={{margin:10}}>
                            <TouchableOpacity style={{width:'100%',height:50,backgroundColor:'#5171af',borderRadius:15,alignItems:'center',flexDirection:'row',elevation:5}}>
                                    <Icon style={{marginLeft:20}} name="facebook-f" size={20} color="#fff" />
                                    <Text style={{marginLeft:30, fontSize:20,color:'white'}}>LOGIN WITH FACEBOOK</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{width:'100%',marginVertical:20,height:50,backgroundColor:'#e85b43',borderRadius:15,alignItems:'center',flexDirection:'row',elevation:5}}>
                                <Icon style={{marginLeft:20}} name="google" size={20} color="#fff" />
                                <Text style={{marginLeft:30, fontSize:20,color:'white'}}>LOGIN WITH GOOGLE</Text>
                            </TouchableOpacity>


                        </View>
                    

                </View>
            </View>





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


export default LoginScreen;



