import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import { Container, Header, Title, Content, Button, Icon, Card, CardItem, Text, Body, Left, Right, IconNB } from "native-base";



export default class QuestionCard extends Component {
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
                لماذا يعيش السمك في الماء؟
                  </Text>
              </Body>
            </CardItem>

            <CardItem header button onPress={() => alert("هممممممم")}>
                <Text style={styles.numberofanswers}>7 أجوبة</Text>
            </CardItem>
            <CardItem button>
              <Button style={styles.card} onPress={() => alert("تم حفظ الإجابة")}><Text> جاوب </Text> </Button>
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
  numberofanswers: {
    color: '#C9BDA7',
    fontSize: 14,
  },
  later: {
    color: '#C9BDA7',
    fontSize: 12,
  },
})
