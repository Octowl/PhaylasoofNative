import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import { Container, Header, Title, Thumbnail, Content, Button, Icon, Card, CardItem, Text, Body, Left, Right, IconNB } from "native-base";
import laila from '../images/laila.jpg';
import list from './list.js'

export default class AnsweredQuestionCard extends Component {

  render() {
    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem bordered button onPress={() => alert("هممممممم")}>
              <Body>
                <Text style={{textAlign: 'right', color: '#528D95'}}>علم البحار</Text>
              </Body>
            </CardItem>
            <CardItem button onPress={() => alert("هممممممم")}>
              <Body>
                  <Text  style = {{color: '#528D95'}}>
                    {list[0].question}
                  </Text>
              </Body>
            </CardItem>
            <CardItem header button onPress={() => alert("هممممممم")}>
              <Body>
                <Right><Thumbnail bordered source={list[0].bestAnswerProfilePic} /></Right>
                <Left>
                  <Text style={styles.answerprofile}>{list[0].bestAnswerProfileName} - {list[0].bestAnswerProfileTitle}</Text>
                </Left>

                <Text style={styles.bestanswer}>{list[0].bestAnswer}</Text>
              </Body>
            </CardItem>

            <CardItem button>
              <Button small style={styles.card} onPress={() => alert("تم حفظ الإجابة")}><Text> جاوب </Text> </Button>
              <Text>    </Text>
              <Text style={styles.later}> جاوب لاحقاً </Text>
            </CardItem>
          </Card>
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
