import React, { Component } from 'react';
import {ScrollView, StyleSheet, Text, View, I18nManager} from 'react-native';
import {Container} from 'native-base';

import QuestionCard from './QuestionCard.js';


export default class QuestionsPage extends Component {
  render() {
    return (
      <Container>
        {/* <ScrollView> */}
        {/* Aziz: Will this eventually be a list? */}
        <QuestionCard />

        {/* </ScrollView> */}
        {/* <Segments /> */}
      </Container>
    );
  }
}
