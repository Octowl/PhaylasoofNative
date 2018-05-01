import React, { Component } from 'react';
import {I18nManager} from 'react-native';
import { NativeRouter, Route, Switch } from 'react-router-native';
import {Container} from 'native-base';

import HeaderStyle from './Components/HeaderStyle.js';
import FooterStyle from './Components/FooterStyle.js';
import AskQuestion from './Components/AskQuestion.js';
import QuestionsPage from './Components/QuestionsPage.js';
import FeedPage from './Components/FeedPage.js';
import QuestionDetail from './Components/QuestionDetail.js';


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
            <Route path='/askquestion' component={AskQuestion}/>
            <Route path='/questiondetail' component={QuestionDetail}/>
          </Switch>
          <FooterStyle />
        </Container>
      </NativeRouter>
    );
  }
}
