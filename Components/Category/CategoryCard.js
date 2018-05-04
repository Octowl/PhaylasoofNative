import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import { Link } from 'react-router-native';
import { Body, Button, Card, CardItem, Content, Text, Thumbnail } from "native-base";

export default class CategoryCard extends Component {

  render() {
    const category = this.props.category;

    console.log(category.questions)

    return (
        <Content padder>
          <Card>
            <Link to={`/categorydetail/${category.id}`} component={CardItem} button >
              <Body>
                  <Thumbnail bordered source={category.image}/>
                  <Text  style = {{color: '#528D95'}}>
                    {category.category_title}
                  </Text>
              </Body>
            </Link>
            <Link to={`/categorydetail/${category.id}`} component={CardItem} button >
                <Text style={styles.numberofanswers}> سؤال</Text>
                <Text>{"\t"}</Text>
                <Text style={styles.numberofanswers}> متابع</Text>
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
