import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import { Container, Thumbnail, Content, Button, Card, CardItem, Text, Body, Left, Right } from "native-base";

import Store from '../Store/Store.js';

export default class QuestionDetail extends Component {

  render() {

    const questionID = this.props.match.params.questionID;
    const question = Store.getQuestionByID(questionID);
    console.log(question);

    return (
      <Container>
        <Content padder>
              <Body>
                <Text style={{textAlign: 'right', color: '#528D95'}}>{question.category}</Text>
                <Text  style = {{color: '#528D95'}}>
                  {question.question}
                  {/* Aziz: you can add a marginBottom to the style instead of a '\n' */}
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
