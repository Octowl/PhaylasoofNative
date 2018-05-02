import React, { Component } from 'react';
import {I18nManager} from 'react-native';
import { NativeRouter, Route, Switch } from 'react-router-native';
import {Container} from 'native-base';

import HeaderStyle from './Components/HeaderStyle.js';
import FooterStyle from './Components/FooterStyle.js';
import AskQuestionCard from './Components/Question/Cards/AskQuestionCard.js';
import QuestionList from './Components/Question/QuestionList.js';
import FeedPage from './Components/FeedPage.js';
import QuestionDetail from './Components/Question/QuestionDetail.js';
import CategoryList from './Components/Category/CategoryList.js';
import CategoryDetail from './Components/Category/CategoryDetail.js';

I18nManager.forceRTL(true);

export default class App extends Component {
  render() {
    return (
      <NativeRouter>
        <Container>
          <HeaderStyle />
          <Switch>
            <Route exact path='/' component={FeedPage} />
            <Route path='/questionlist' component={QuestionList} />
            <Route path='/askquestion' component={AskQuestionCard} />
            <Route path='/questiondetail/:questionID' component={QuestionDetail} />
            <Route path='/categorylist' component={CategoryList} />
            <Route path='/categorydetail/:categoryID' component={CategoryDetail} />
          </Switch>
          <FooterStyle />
        </Container>
      </NativeRouter>
    );
  }
}
