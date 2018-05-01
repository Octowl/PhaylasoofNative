import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';

export default class FooterStyle extends Component {
  render() {
    return (
        <Footer style={styles.headerstyle}>
          <FooterTab>
            <Button vertical>
              <Icon name="home" style={styles.icon} />
              <Text style={styles.icontext}>الرئيسية</Text>
            </Button>
            <Button vertical>
              <Icon name="paper" style={styles.icon} />
              <Text style={styles.icontext}>جاوب</Text>
            </Button>
            <Button vertical style={styles.askiconbg}>
              <Icon name="add" style={styles.askicon}/>
              <Text style={styles.askicontext}>اسأل</Text>
            </Button>
            <Button vertical>
              <Icon active name="notifications" style={styles.icon} />
              <Text style={styles.icontext}>إشعارات</Text>
            </Button>
            <Button vertical>
              <Icon name="person" style={styles.icon} />
              <Text style={styles.icontext}>حسابك</Text>
            </Button>
          </FooterTab>
        </Footer>
    );
  }
}

const styles = StyleSheet.create({
  headerstyle: {
    backgroundColor: '#528D95',
  },

  askiconbg: {
    backgroundColor: 'white',
  },

  askicon: {
        color: '#528D95',
        fontSize: 40,
  },

  askicontext: {
  color: '#528D95',
  fontSize: 12,
  },

  icon: {
  color: 'white',
  },

  icontext: {
  color: 'white',
  fontSize: 12,
  },

});
