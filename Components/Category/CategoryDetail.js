import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import {observer} from 'mobx-react';
import { Body, Button, Card, CardItem, Container, Content, Left, Right, Thumbnail, Text, List } from "native-base";

import Store from '../Store/Store.js';
import QuestionCard from '../Question/Cards/QuestionCard.js';

export default observer(class CategoryDetail extends Component {
  constructor(props) {
    super(props)

    /*
    * Aziz:
    * This doesn't need to be on the state.
    * It can just be a variable in your render method.
    */
    this.state = {
      category: Store.getCategoryByID(this.props.match.params.categoryID)
    }
  }

  componentDidMount() {
    Store.fetchQuestions(this.state.category.questions);
  }

  render() {
    /* Aziz: these are not the questions you are looking for... */
    const questions = Store.apiquestions;
    console.log(questions);
    return (
      <Container>
        <Content >
              <Body>
                {/* <Thumbnail bordered source={{uri: this.state.category.image}}/> */}
                <Text style={{textAlign: 'right', color: '#528D95'}}>{this.state.category.category_title}</Text>
                <Text  style = {{color: '#528D95'}}>
                  {this.state.category.category_description}
                  {"\n"}
                </Text>
                <Button small style={styles.card}><Text> تابع </Text></Button>
                <List
                    dataArray={questions.slice()}
                    renderRow={(question) => <QuestionCard question={question} />}
                />
              </Body>
        </Content>
      </Container>
    );
  }
})

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#B4A298',
  },
  answerprofile: {
    color: '#739B93',
    fontSize: 14,
  },
  bestanswer: {
    color: '#739B93',
    fontSize: 18,
  },
  later: {
    color: '#C9BDA7',
    fontSize: 12,
  },
})
