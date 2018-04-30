import React, { Component } from 'react';
import {ScrollView, StyleSheet, Text, View, I18nManager} from 'react-native';
import {Container} from 'native-base';

import HeaderStyle from './Components/HeaderStyle.js';
import AskQuestion from './Components/AskQuestion.js';
import QuestionCard from './Components/QuestionCard.js';

I18nManager.forceRTL(true);

// import Segments from './Components/Segments.js'

export default class App extends Component {
  render() {
    return (
      <Container>
        <HeaderStyle />
        {/* <ScrollView> */}
          <AskQuestion />
          <QuestionCard />
          <QuestionCard />
        {/* </ScrollView> */}
        {/* <Segments /> */}
      </Container>
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
