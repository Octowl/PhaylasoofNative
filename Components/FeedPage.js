import React, { Component } from 'react';
import {ScrollView, StyleSheet, Text, View, I18nManager} from 'react-native';
import {Container} from 'native-base';

import AnsweredQuestionCard from './AnsweredQuestionCard.js';
import AskQuestion from './AskQuestion.js';

export default class FeedPage extends Component {
  render() {
    return (
      <Container>
        <Text style={styles.intro}>أهلاً بكم في عالم المتفلسفين</Text>
        <AskQuestion />
        <AnsweredQuestionCard />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  intro: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#528D95',
  },
});
