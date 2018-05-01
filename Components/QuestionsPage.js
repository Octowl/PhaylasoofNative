import { observer } from "mobx-react";
import React, { Component } from 'react';
import {Container, Content, List} from 'native-base';

import questions from './list';
import QuestionCard from './QuestionCard.js';
import Store from './Store.js'


export default class QuestionsPage extends Component {

  render() {
    console.log(Store.QuestionObject);

    return (
      <Container>
        <Content>
          <List
            dataArray={questions}
            renderRow={(question) => <QuestionCard question={question} />}
          />
        </Content>
      </Container>
    );
  }
};
