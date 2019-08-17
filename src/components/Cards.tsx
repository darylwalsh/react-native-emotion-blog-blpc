import React, { FunctionComponent } from 'react'
import { Image } from 'react-native'

import styled, { css } from '@emotion/native'

const Card: FunctionComponent = props => (
  <Container>
    <Cover>
      <Image source={require('./pepper.png')} />
    </Cover>
    <Content>
      <Title>Pepper</Title>
      <PriceCaption>$ 2.99 each</PriceCaption>
    </Content>
  </Container>
)

const Container = styled.View`
  background: #fff;
  height: 200px;
  width: 150px;
  border-radius: 14px;
  margin: 18px;
  margin-top: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`

const Cover = styled.View`
  width: 100%;
  height: 120px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
`

const ImageStyle = styled.Image`
  width: 100%;
  height: 100%;
`

const Content = styled.View`
  padding-top: 10px;
  flex-direction: column;
  align-items: center;
  height: 60px;
`

const Title = styled.Text`
  color: #3c4560;
  font-size: 20px;
  font-weight: 600;
`

const PriceCaption = styled.Text`
  color: #b8b3c3;
  font-size: 15px;
  font-weight: 600;
  margin-top: 4px;
`
export default Card
