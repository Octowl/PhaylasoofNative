import React, { Component } from 'react';
import { StyleSheet, Text, I18nManager } from 'react-native';
import { Container, Content, List } from 'native-base';

import AnsweredQuestionCard from './Question/Cards/AnsweredQuestionCard.js';
import QuestionCard from './Question/Cards/QuestionCard.js';
import AskQuestionCard from './Question/Cards/AskQuestionCard.js';
import Store from './Store/Store.js';

/* Aziz: doesn't the FeedPage need to be an observer? */
export default class FeedPage extends Component {
  render() {
    return (
      <Container>
        <Text style={styles.intro}>أهلاً بكم في عالم المتفلسفين</Text>
        <Content>
          <List
            dataArray={Store.questions.slice()}
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
