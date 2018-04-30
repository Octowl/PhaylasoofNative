import React, { Component } from 'react';
import {StyleSheet, TextInput} from 'react-native';

import { Container, Header, Title, Content, Button, Icon, Card, CardItem, Text, Body, Left, Right, IconNB } from "native-base";

export default class AskQuestion extends Component {
  render() {
    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem bordered>
              <Body>
                <Left></Left>
                <Right>
                  <Text>اسأل مجرباً ولا تسأل حكيماً</Text>
                </Right>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                  <TextInput bordered
                      style={{height: 75, borderColor: 'gray'}}
                      editable = {true}
                      maxLength = {500}
                      numberOfLines = {5}
                      multiline = {true}
                      placeholder="اكتب سؤالك هنا"
                    />
              </Body>
            </CardItem>
            <CardItem button onPress={() => alert("تم حفظ السؤال")}>
              <Button style={styles.card}><Text> اسأل </Text> </Button>
              <Text>  </Text>
              <Button light><Text> إلغاء </Text> </Button>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#9370DB',
  },
  later: {
    color: 'grey',
    fontSize: 12,
  }
})
