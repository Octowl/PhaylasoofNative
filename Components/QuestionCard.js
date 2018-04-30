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
                <Text style={{textAlign: 'right'}}>علم البحار</Text>
              </Body>
            </CardItem>
            <CardItem button onPress={() => alert("هممممممم")}>
              <Body>
                  <Text>
                    {/* {"\n"}{"\n"} */}
                لماذا يعيش السمك في الماء؟
                  </Text>
              </Body>
            </CardItem>

            <CardItem header button onPress={() => alert("هممممممم")}>
              <Left></Left>
              <Right>
                <Text>7 أجوبة</Text>
              </Right>
            </CardItem>
            <CardItem button onPress={() => alert("تم حفظ السؤال")}>
              <Button style={styles.card}><Text> جاوب </Text> </Button>
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
    backgroundColor: '#DDA0DD',
  },
  later: {
    color: 'grey',
    fontSize: 12,
  }
})
