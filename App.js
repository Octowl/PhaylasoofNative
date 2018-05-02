import React, { Component } from 'react';
import {I18nManager} from 'react-native';
import { NativeRouter, Route, Switch } from 'react-router-native';
import {Container} from 'native-base';

import HeaderStyle from './Components/HeaderStyle.js';
import FooterStyle from './Components/FooterStyle.js';
import AskQuestionCard from './Components/Question/Cards/AskQuestionCard.js';
import QuestionsPage from './Components/Question/QuestionsPage.js';
import FeedPage from './Components/FeedPage.js';
import QuestionDetail from './Components/Question/QuestionDetail.js';
import CategoryList from './Components/Category/CategoryList.js';

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
            <Route path='/askquestion' component={AskQuestionCard}/>
            <Route path='/questiondetail' component={QuestionDetail}/>
            {/* <Route path='/categorylist' component={CategoryList} /> */}
          </Switch>
          <FooterStyle />
        </Container>
      </NativeRouter>
    );
  }
}
