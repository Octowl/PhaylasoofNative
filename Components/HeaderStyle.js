import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

export default class HeaderStyle extends Component {
  render() {
    return (
        <Header style={styles.headerstyle}>
            <Right>
            <Button transparent>
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
          <Button transparent>
            <Icon style={styles.icon} name='heart' />
          </Button>
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
    backgroundColor: '#5C4A72',
  },

  icon: {
  color: 'white',
  // fontSize: 17,
  // opacity: 1,
  },

});
