import React from 'react';
import { ScrollView } from 'react-native';

import styled, { css } from '@emotion/native';

import Card from './src/components/Cards';
import Categories from './src/components/Categories';

const items = [
  { text: 'Fruits' },
  { text: 'Bread' },
  { text: 'Drinks' },
  { text: 'Veggies' },
  { text: 'Meat' },
  { text: 'Paper Goods' },
]
export default class App extends React.Component {
  render() {
    return (
      <Container>
        <ScrollView>
          <Titlebar>
            <Avatar source={require('./assets/avatar.jpg')} />
            <Title>Welcome back,</Title>
            <Name>BLPC</Name>
          </Titlebar>

          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={css`
              margin: 20px;
              margin-left: 12px;
            `}
          >
            {items.map((category, index) => (
              <Categories name={category.text} key={index} />
            ))}
          </ScrollView>
          <Subtitle>Items</Subtitle>
          <ItemsLayout>
            <ColumnOne>
              <Card />
            </ColumnOne>
            <ColumnTwo>
              <Card />
            </ColumnTwo>
          </ItemsLayout>
        </ScrollView>
      </Container>
    )
  }
}

const Container = styled.View`
  flex: 1;
  background-color: white;
`

const Titlebar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
`

const Subtitle = styled.Text`
  font-size: 20px;
  color: #333333;
  font-weight: 500;
  margin-top: 10px;
  margin-left: 25px;
  text-transform: uppercase;
`
const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  margin-left: 20px;
  position: absolute;
  top: 0;
  left: 0;
`

const Title = styled.Text`
  font-size: 20px;
  font-weight: 500;
  color: #b8bece;
`

const Name = styled.Text`
  font-size: 20px;
  color: #333333;
  font-weight: bold;
`

const ItemsLayout = styled.View`
  flex-direction: row;
  flex: 1;
`

const ColumnOne = styled.View``

const ColumnTwo = styled.View``
