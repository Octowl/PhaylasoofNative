import React, { Component } from 'react';
import {ScrollView, StyleSheet, Text, View, I18nManager} from 'react-native';
import {Container} from 'native-base';

import QuestionCard from './QuestionCard.js';
import AskQuestion from './AskQuestion.js';



export default class FeedPage extends Component {
  render() {
    return (
      <Container>
        {/* <ScrollView> */}
        <AskQuestion />
        {/* </ScrollView> */}
        {/* <Segments /> */}
      </Container>
    );
  }
}
