import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import { Container, Thumbnail, Content, Button, Card, CardItem, Text, Body, Left, Right } from "native-base";

import Store from '../Store/Store.js'

export default class CategoryDetail extends Component {

  render() {

    const categoryID = this.props.match.params.categoryID;
    const category = Store.getCategoryByID(categoryID);
    console.log(category);

    return (
      <Container>
        <Content padder>
              <Body>
                <Text style={{textAlign: 'right', color: '#528D95'}}>{category.category}</Text>
                <Text  style = {{color: '#528D95'}}>
                  {category.numberOfQuestions}
                  {"\n"}
                </Text>
                <Button small style={styles.card}><Text> تابع </Text> </Button>
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
