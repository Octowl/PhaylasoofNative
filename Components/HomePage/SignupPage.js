import React, { Component } from 'react';
import { Link } from 'react-router-native';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Button, Title } from 'native-base';

export default class SignupPage extends Component {

  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.title}>التسجيل</Text>
          <TextInput style={styles.textinput} placeholder="اسم المستخدم" placeholderTextColor='#739B93' />
          <TextInput style={styles.textinput} placeholder="الاسم الأول" placeholderTextColor='#739B93' />
          <TextInput style={styles.textinput} placeholder="اسم العائلة" placeholderTextColor='#739B93' />
          <TextInput style={styles.textinput} placeholder="البريد الإلكتروني" placeholderTextColor='#739B93' />
          <TextInput style={styles.textinput} placeholder="كلمة السر" placeholderTextColor='#739B93' secureTextEntry={true} />
          <TouchableOpacity style={styles.buttonstyle}>
            <Text style={styles.buttontext}>سجل</Text>
          </TouchableOpacity>
          <Link to='./signin' component={Button} transparent>
            <Text style={styles.register}>
              أتمتلك حساباً؟ سجل دخولك!
            </Text>
          </Link>
        </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingRight: 60,
    paddingLeft: 60,
  },

  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },

  title: {
    color: '#528D95',
    fontSize: 24,
    borderBottomColor: '#528D95',
    marginBottom: 10,
  },

  textinput: {
    alignSelf: 'stretch',
    height: 40,
    marginBottom: 30,
    color: 'white',
    borderBottomColor: '#528D95',
    borderBottomWidth: 1,
  },

  buttonstyle: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#528D95',
    marginTop: 30,
  },

  buttontext: {
    color: 'white',
    fontWeight: 'bold',
  },

  register: {
    color: '#528D95',
    alignSelf: 'stretch',
    alignItems: 'center',
    marginTop: 15,
  },
  }
)
