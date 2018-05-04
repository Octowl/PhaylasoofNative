import React, { Component } from 'react';
import { Link } from 'react-router-native';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Button, Title } from 'native-base';

export default class SigninPage extends Component {

  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.title}>تسجيل الدخول</Text>
          <TextInput style={styles.textinput} placeholder="اسم المستخدم" placeholderTextColor='#739B93' />
          <TextInput style={styles.textinput} placeholder="كلمة السر" placeholderTextColor='#739B93' secureTextEntry={true} />
          <TouchableOpacity style={styles.buttonstyle}>
            <Text style={styles.buttontext}>سجل دخولك</Text>
          </TouchableOpacity>
          <Link to='./signup' component={Button} transparent>
            <Text style={styles.register}>
              ألا تمتلك حساباً؟ سجل الآن!
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

  title: {
    color: '#528D95',
    fontSize: 24,
    borderBottomColor: '#528D95',
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
