import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import { Content, Button, Card, CardItem, Text, Body } from "native-base";
import list from './list.js'

export default class QuestionCard extends Component {

  render() {
    const question = this.props.question;
    console.log(question);

    return (
        <Content padder>
          <Card>
            <CardItem bordered button onPress={() => alert("هممممممم")}>
              <Body>
                <Text style={{textAlign: 'right', color: '#528D95'}}>{question.category}</Text>
              </Body>
            </CardItem>

            <CardItem button onPress={() => alert("هممممممم")}>
              <Body>
                  <Text  style = {{color: '#528D95'}}>
                    {question.question}
                  </Text>
              </Body>
            </CardItem>

            <CardItem header button onPress={() => alert("هممممممم")}>
                <Text style={styles.numberofanswers}>{question.numberOfAnswers} أجوبة</Text>
            </CardItem>

            <CardItem button>
              <Button small style={styles.card} onPress={() => alert("تم حفظ الإجابة")}><Text> جاوب </Text> </Button>
              <Text>    </Text>
              <Text style={styles.later}> جاوب لاحقاً </Text>
            </CardItem>
          </Card>
        </Content>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#B4A298',
  },
  numberofanswers: {
    color: '#C9BDA7',
    fontSize: 14,
  },
  later: {
    color: '#C9BDA7',
    fontSize: 12,
  },
})
