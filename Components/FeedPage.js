import React, { Component } from 'react';
import { StyleSheet, Text, I18nManager } from 'react-native';
import { Container, Content, List } from 'native-base';

import AnsweredQuestionCard from './AnsweredQuestionCard.js';
import QuestionCard from './QuestionCard.js';
import AskQuestion from './AskQuestion.js';
import questions from './list';

export default class FeedPage extends Component {
  render() {
    return (
      <Container>
        <Text style={styles.intro}>أهلاً بكم في عالم المتفلسفين</Text>
        <AskQuestion />
        <Content>
          <List
            dataArray={questions}
            renderRow={(question) => <QuestionCard question={question} />}
          />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  intro: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#528D95',
    fontSize: 18,
  },
});
