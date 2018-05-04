import { observer } from "mobx-react";
import React, { Component } from 'react';
import {Container, Content, List} from 'native-base';

import CategoryCard from './CategoryCard.js';
import Store from '../Store/Store.js';


export default observer(class CategoryList extends Component {

  render() {
    return (
      <Container>
        <Content>
          <List
            dataArray={Store.categories.slice()}
            renderRow={(category) => <CategoryCard category={category} />}
          />
        </Content>
      </Container>
    );
  }
})
