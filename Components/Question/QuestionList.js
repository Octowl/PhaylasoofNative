import { observer } from "mobx-react";
import React, { Component } from 'react';
import {Container, Content, List} from 'native-base';

import QuestionCard from './Cards/QuestionCard.js';
import Store from '../Store/Store.js'


export default observer(class QuestionList extends Component {


  render() {
        /* Aziz: dead code */
        // const questions = Store.categories.map(category => Store.fetchQuestions(category.id));
        console.log(Store.questions);

        return (
          <Container>
            <Content>
              <List
                dataArray={Store.questions.slice()}
                renderRow={(question) => <QuestionCard question={question} />}
              />
            </Content>
          </Container>
        );
      }
    })
