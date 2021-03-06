import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import { NativeRouter, Route, Link, Switch } from 'react-router-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

export default class HeaderStyle extends Component {
  render() {
    return (
        <Header style={styles.headerstyle}>
            <Right>
            <Button transparent >
              <Icon style={styles.icon} name='arrow-forward' />
            </Button>
            </Right>
          <Body>
            <Title style={styles.icon}>فيلسوف</Title>
          </Body>
          <Left>
          <Button transparent>
            <Icon style={styles.icon} name='search' />
          </Button>
          <Link to='/questions' component={Button} transparent >
            <Icon style={styles.icon} name='heart' />
          </Link>
          <Button transparent>
            <Icon style={styles.icon} name='more' />
          </Button>
          </Left>

        </Header>
    );
  }
}

const styles = StyleSheet.create({
  headerstyle: {
    backgroundColor: '#528D95',
  },

  icon: {
  color: 'white',
  // fontSize: 17,
  // opacity: 1,
  },

});
