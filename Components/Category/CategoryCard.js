import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import { Link } from 'react-router-native';
import { Content, Button, Card, CardItem, Text, Body } from "native-base";

export default class CategoryCard extends Component {

  render() {
    const category = this.props.category;
    console.log(category);

    return (
        <Content padder>
          <Card>
            <Link to={`/categorydetail/${category.id}`} component={CardItem} button >
              <Body>
                  <Text  style = {{color: '#528D95'}}>
                    {category.category_title}
                  </Text>
              </Body>
            </Link>
            <Link to={`/categorydetail/${category.id}`} component={CardItem} button >
                <Text style={styles.numberofanswers}>{category.numberOfQuestions} سؤال</Text>
                <Text>{"\t"}</Text>
                <Text style={styles.numberofanswers}>{category.numberOfFollowers} متابع</Text>
            </Link>
            <CardItem button>
              <Button small style={styles.card}><Text> تابع </Text> </Button>
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
