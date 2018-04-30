import React, { Component } from 'react';
import {StyleSheet, TextInput} from 'react-native';

import { Container, Header, Title, Content, Button, Icon, Card, CardItem, Text, Textarea, Body, Left, Right, IconNB } from "native-base";

export default class AskQuestion extends Component {
  render() {
    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                  <Text style = {{color: '#528D95'}}>اسأل مجرباً ولا تسأل حكيماً</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                  <Textarea bordered
                      style = {styles.textarea}
                      editable = {true}
                      maxLength = {500}
                      numberOfLines = {5}
                      multiline = {true}
                      placeholder = "اكتب سؤالك هنا"
                      placeholderTextColor = "#B4A298"
                    />

              </Body>
            </CardItem>
            <CardItem button>
              <Button style={styles.card} onPress={() => alert("تم حفظ السؤال")}><Text> اسأل </Text> </Button>
              <Text>  </Text>
              <Button style={styles.cancel}><Text> إلغاء </Text> </Button>
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
  cancel: {
    backgroundColor: '#FCE5C5',
  },
  later: {
    color: '#C9BDA7',
    fontSize: 12,
  },
  textarea: {
    height: 75,
    width: 325,
    borderColor: '#B4A298',
    textAlign: 'right'
  },
})
