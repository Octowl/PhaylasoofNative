import React, { Component } from 'react';
import {ScrollView, StyleSheet, Text, View, I18nManager} from 'react-native';
import { NativeRouter, Route, Link, Switch } from 'react-router-native';
import {Container} from 'native-base';

import HeaderStyle from './Components/HeaderStyle.js';
import FooterStyle from './Components/FooterStyle.js';
import AskQuestion from './Components/AskQuestion.js';
import QuestionCard from './Components/QuestionCard.js';
import QuestionsPage from './Components/QuestionsPage.js';
import FeedPage from './Components/FeedPage.js'

I18nManager.forceRTL(true);

export default class App extends Component {
  render() {
    return (
      <NativeRouter>
        <Container>
          <HeaderStyle />
          <Switch>
            <Route exact path='/' component={FeedPage} />
            <Route path='/questions' component={QuestionsPage}/>
          </Switch>
          <FooterStyle />
        </Container>
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
