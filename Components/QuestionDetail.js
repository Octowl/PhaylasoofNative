import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import { Container, Thumbnail, Content, Button, Card, CardItem, Text, Body, Left, Right } from "native-base";
import laila from '../images/laila.jpg';
import list from './list.js'

export default class QuestionDetail extends Component {

  render() {
    return (
      <Container>
        <Content padder>
              <Body>
                <Text style={{textAlign: 'right', color: '#528D95'}}>علم البحار</Text>
                <Text  style = {{color: '#528D95'}}>
                  {list[0].question}
                  {"\n"}
                </Text>
                <Button small style={styles.card} onPress={() => alert("تم حفظ الإجابة")}><Text> جاوب </Text> </Button>
                <Text style={styles.later}>{"\n"} جاوب لاحقاً </Text>
                <Thumbnail bordered source={list[0].bestAnswerProfilePic} />
                <Text style={styles.answerprofile}>{list[0].bestAnswerProfileName} - {list[0].bestAnswerProfileTitle}</Text>
                <Text style={styles.bestanswer}>{list[0].bestAnswer}</Text>
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
