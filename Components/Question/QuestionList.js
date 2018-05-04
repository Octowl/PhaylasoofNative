import { observer } from "mobx-react";
import React, { Component } from 'react';
import {Container, Content, List} from 'native-base';

import QuestionCard from './Cards/QuestionCard.js';
import Store from '../Store/Store.js'


export default observer(class QuestionList extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     categories: Store.categories,
  //   }
  //   console.log("hi");
  // // }
  // //
  // componentDidMount() {
  //   Store.categories.forEach(category => {Store.fetchQuestions(category.questions)});
  // }

  render() {
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
