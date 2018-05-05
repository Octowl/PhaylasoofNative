import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import { Body, Button, Header, Icon, Title } from 'native-base';

export default class HeaderStyle extends Component {
  render() {
    return (
        <Header style={styles.headerstyle}>
            <Link to='/' component={Button} transparent >
              <Icon style={styles.icon} name='arrow-forward' />
            </Link>
            <Body>
              <Link to='/' component={Button} transparent>
                <Title style={styles.icon}>فيلسوف</Title>
              </Link>
            </Body>
          <Button transparent >
            <Icon style={styles.icon} name='search' />
          </Button>
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
  },
});
