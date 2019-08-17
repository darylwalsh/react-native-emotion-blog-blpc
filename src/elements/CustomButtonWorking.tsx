import * as React from 'react'
import {
  TouchableNativeFeedbackProperties,
  TouchableOpacityProperties,
} from 'react-native'

import { jsx } from '@emotion/core'
import styled, { css } from '@emotion/native'

// interface ButtonPropsInterface
//   extends TouchableNativeFeedbackProperties,
//     TouchableOpacityProperties {
//   backgroundColor: any
//   onPress: any
//   textColor: string
//   text: string
//   children?: JSX.Element
// }

interface ButtonPropsInterface
  extends TouchableNativeFeedbackProperties,
    TouchableOpacityProperties {
  backgroundColor?: string
  textColor?: string
  text?: string
  style?: any
  children?: React.ReactNode
}
interface TextPropsInterface
  extends TouchableNativeFeedbackProperties,
    TouchableOpacityProperties {
  fontSize?: string
  textColor?: string
  textAlign?: string
  children?: React.ReactNode
}

type ButtonTextPropsInterface = ButtonPropsInterface & TextPropsInterface

const CustomButton: React.FC<ButtonTextPropsInterface> = ({
  backgroundColor,
  onPress,
  textColor,
  text,
  children,
  ...rest
}) => (
  <ButtonContainer
    onPress={() => alert('You are using Emotion-JS!')}
    backgroundColor={backgroundColor}
    css={css`
      border-width: 5px;
      border-color: coral;
    `}
  >
    <ButtonText textColor={textColor}>{text}</ButtonText>
  </ButtonContainer>
)

const ButtonContainer = styled.TouchableOpacity<ButtonPropsInterface>`
  margin: 15px;
    width: 100px;
    height: 40px
    padding: 12px;
    border-radius: 10px;    
    background-color: ${props => props.backgroundColor};
`

const ButtonText = styled.Text<TextPropsInterface>`
  font-size: 15px;
  color: ${props => props.textColor};
  text-align: center;
`

export default CustomButton

// const ButtonContainer = styled.TouchableOpacity(() => ({
//     margin: 15,
//     width: 100,
//     height: 40,
//     padding: 12,
//     borderRadius: 10,
//     backgroundColor: ${props => props.backgroundColor},
// }))

// const ButtonContainer = styled.TouchableOpacity(() => ({
//   margin: 15,
//   width: 100,
//   height: 40,
//   padding: 12,
//   borderRadius: 10,
//   backgroundColor: 'black',
// }))

// const ButtonText = styled.Text`
//   fontSize: 15px,
//   color: 'black',
//   textAlign: center,
// `
