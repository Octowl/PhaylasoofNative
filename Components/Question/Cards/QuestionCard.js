import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import { Link } from 'react-router-native';
import { Content, Button, Card, CardItem, Text, Body } from "native-base";

export default class QuestionCard extends Component {

  render() {
    const question = this.props.question;

    return (
        <Content padder>
          <Card>
            <Link to={`/questiondetail/${question.id}`} component={CardItem} button>
              <Body>
                <Text style={styles.category}>{question.category}</Text>
              </Body>
            </Link>
            <Link to={`/questiondetail/${question.id}`} component={CardItem} button>
              <Body>
                  <Text  style = {{color: '#528D95'}}>
                    {question.question}
                  </Text>
              </Body>
            </Link>
            <Link to={`/questiondetail/${question.id}`} component={CardItem} button>
                <Text style={styles.numberofanswers}>{question.numberOfAnswers} أجوبة</Text>
            </Link>
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
  category: {
    textAlign: 'right',
    color: '#528D95',
    fontSize: 14,
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
