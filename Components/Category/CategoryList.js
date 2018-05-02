import { observer } from "mobx-react";
import React, { Component } from 'react';
import {Container, Content, List} from 'native-base';

import CategoryCard from './CategoryCard.js';
import Store from '../Store/Store.js';


export default class CategoryList extends Component {

  render() {
    return (
      <Container>
        <Content>
          <List
            dataArray={Store.apicategories.slice()}
            renderRow={(category) => <CategoryCard category={category} />}
          />
        </Content>
      </Container>
    );
  }
};
