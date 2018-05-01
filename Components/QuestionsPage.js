import React, { Component } from 'react';
import {StyleSheet, View, I18nManager, ListView} from 'react-native';
import {Container, Card, CardItem, Text, Button, Icon, Left, Body, List, ListItem} from 'native-base';

import list from './list';
import QuestionCard from './QuestionCard.js';


export default class QuestionsPage extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      listViewData: list,
    };
  }

  render() {
    console.log(this.state.listViewData);
    console.log(this.state.ds);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    console.log(ds);


    return (
      <List
            dataSource={this.ds.cloneWithRows(this.state.listViewData)}
            renderRow={(data,index) =>
                    <ListItem>
                        <Text>{data.category}</Text>
                        <View style={styles.divider}></View>
                    </ListItem>}
        />
    );
  }
};

const styles = StyleSheet.create({
    text: {
        color: 'white',
        fontSize: 15,
    },
    divider: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    }
  });
