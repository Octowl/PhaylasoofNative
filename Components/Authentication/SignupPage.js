import React, { Component } from 'react';
import { Link } from 'react-router-native';
import {observer} from 'mobx-react';

import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Button, Title } from 'native-base';
import Store from '../Store/Store.js';

export default observer(class SignupPage extends Component {
  constructor(props) {
    super(props)

    /*
    * Aziz:
    * you should use either the store or the state
    * to manage the form data. There's no need to use both.
    */
    this.state = {
      username: "",
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    }
    this.newUser = this.newUser.bind(this);
  }

  newUser() {
    Store.username = this.state.username;
    Store.firstname = this.state.firstname;
    Store.lastname = this.state.lastname;
    Store.email = this.state.email;
    Store.password = this.state.password;
    Store.register();
  }

  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.title}>أنشئ حساباً جديداً</Text>
          <TextInput style={styles.textinput} placeholder="اسم المستخدم" placeholderTextColor='#739B93'
                     value={this.state.username}
                     onChangeText={(e) => this.setState({username: e})}/>

                     {/* Aziz: dead code */}
                     
          {/* <TextInput style={styles.textinput} placeholder="الاسم الأول" placeholderTextColor='#739B93'
                     value={this.state.firstname}
                     onChangeText={(e) => this.setState({firstname: e})} />
          <TextInput style={styles.textinput} placeholder="اسم العائلة" placeholderTextColor='#739B93'
                     value={this.state.lastname}
                     onChangeText={(e) => this.setState({lastname: e})} />
          <TextInput style={styles.textinput} placeholder="البريد الإلكتروني" placeholderTextColor='#739B93'
                     value={this.state.email}
                     onChangeText={(e) => this.setState({email: e})} /> */}
          <TextInput style={styles.textinput} placeholder="كلمة السر" placeholderTextColor='#739B93' secureTextEntry={true}
                     value={this.state.password}
                     onChangeText={(e) => this.setState({password: e})} />
          <TouchableOpacity style={styles.buttonstyle} onPress={this.newUser}>
            <Text style={styles.buttontext}>سجل</Text>
          </TouchableOpacity>
          <Link to='./signin' component={Button} transparent>
            <Text style={styles.signin}>
              ألديك حساب؟ سجل دخولك!
            </Text>
          </Link>
        </View>
    );
  }
})


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
    color: '#528D95',
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
    fontSize: 18,
  },

  signin: {
    color: '#528D95',
    alignSelf: 'stretch',
    alignItems: 'center',
    marginTop: 15,
  },
  }
)
