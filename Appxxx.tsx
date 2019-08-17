import React from 'react';

import styled from '@emotion/native';

import CustomButton from './src/elements/CustomButtonWorking';

export default function App() {
  return (
    <Container>
      <Title>React Native with 👩‍🎤 Emotion</Title>
      <CustomButton
        text="Click Me"
        textColor="#01d1e5"
        backgroundColor="lavenderblush"
      />
    </Container>
  )
}

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`

const Title = styled.Text`
  font-size: 24px;
  font-weight: 500;
  color: palevioletred;
`
