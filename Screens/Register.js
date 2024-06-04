import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import styles from '../style'
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import * as WebBrowser from 'expo-web-browser';


export default function Register(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [nameVerify, setNameVerify] = useState(false);
    const [emailVerify, setEmailVerify] = useState(false);
    const [mobileVerify, setMobileVerify] = useState(false);
    const [passwordVerify, setPasswordVerify] = useState(false);
    

    const navigation = useNavigation()

    function handleSubmit(){
        const userData = {
            name,
            email,
            mobile,
            password,
        };
        // console.log(nameVerify + " " + emailVerify+ " " + passwordVerify+ " " + mobileVerify);
        if(nameVerify && emailVerify && passwordVerify && mobileVerify){
            axios
                .post("http://192.168.0.103:5001/register", userData)
                .then((res) => {
                    // console.log(res.data)
                    if(res.data.status === "ok"){
                        Alert.alert("Registration Successful");
                        navigation.navigate("Login");
                    } else {
                        Alert.alert(JSON.stringify(res.data));
                    }
                })
                .catch(e => console.log(e))
        } else {
            Alert.alert("Fill in all details")
        }   
    }
    
    function handleName(text){
        setName(text);
        setNameVerify(text.length > 1);
    }

    function handleEmail(text){
        setEmail(text);
        setEmailVerify(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(text));
    }

    function handlePassword(text){
        setPassword(text);
        setPasswordVerify(text.length > 5);
    }

    function handleMobile(text){
        setMobile(text);
        setMobileVerify(true);
    }
    
    

    return (
        <ScrollView contentContainerStyle={{flexGrow: 1}} 
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps="always">
            <View>      
                <View style={styles.loginContainer}>
                    <Text style={styles.text_header}>
                        Register!
                    </Text>

                    <View style={styles.action}>
                        <TextInput 
                            placeholder='Name' 
                            style={styles.textInput}
                            onChangeText={text => handleName(text)}
                        />
                    </View>
                    <View style={styles.action}>
                        <TextInput 
                            placeholder='Email' 
                            style={styles.textInput}
                            onChangeText={text => handleEmail(text)}
                        />
                    </View>
                    <View style={styles.action}>
                        <TextInput 
                            placeholder='Password' 
                            style={styles.textInput}
                            onChangeText={text => handlePassword(text)}
                        />
                    </View>
                    <View style={styles.action}>
                        <TextInput 
                            placeholder='Mobile' 
                            style={styles.textInput}
                            onChangeText={text => handleMobile(text)}
                        />
                    </View>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity style={styles.inBut} onPress={handleSubmit}>
                        <View>
                            <Text style={styles.textSign}>
                                Register
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}
