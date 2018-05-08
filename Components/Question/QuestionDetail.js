import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import { Body, Button, Card, CardItem, Container, Content, Left, Right, Text, Thumbnail } from "native-base";

import Store from '../Store/Store.js';

export default class QuestionDetail extends Component {


  /* Aziz: dead code */
  
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

    const questionID = this.props.match.params.questionID;
    const question = Store.getQuestionByID(questionID);

    return (
      <Container>
        <Content padder>
              <Body>
                <Text style={{textAlign: 'right', color: '#528D95'}}>{question.category}</Text>
                <Text  style = {styles.question}>
                  {question.question}
                  {"\n"}
                </Text>
                <Button small style={styles.card} onPress={() => alert("تم حفظ الإجابة")}><Text> جاوب </Text> </Button>
                <Text style={styles.later}>{"\n"} جاوب لاحقاً </Text>
              </Body>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#B4A298',
  },
  question: {
    color: '#528D95',
    marginBottom: 10,
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
