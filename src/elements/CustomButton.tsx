import * as React from 'react'

import { css, Interpolation, jsx, SerializedStyles } from '@emotion/core'
import styled, { Styled } from '@emotion/native'

type StyledCssFn = (...args: Interpolation[]) => SerializedStyles
interface ButtonPropsInterface {
  backgroundColor?: string
  textColor?: string
  text?: string
  children?: React.ReactNode
}
interface TextPropsInterface {
  fontSize?: string
  textColor?: string
  textAlign?: string
  children?: React.ReactNode
}

type ButtonTextPropsInterface = ButtonPropsInterface & TextPropsInterface

const CustomButton: React.FC<ButtonTextPropsInterface> = ({
  backgroundColor,
  textColor,
  text,
  children,
  ...rest
}) => (
  <ButtonContainer
    onPress={() => alert('You are using Emotion-JS!')}
    backgroundColor={backgroundColor}
    css={css`
      border-width: 1px as '1px';
    `}
  >
    <ButtonText textColor={textColor}>{text}</ButtonText>
  </ButtonContainer>
)

export default CustomButton
const ButtonContainer = styled.TouchableOpacity<ButtonPropsInterface>`
  margin: 15px;
    width: 100px;
    height: 40px
    padding: 12px;
    border-radius: 10px;    
    background-color: ${props => props.backgroundColor};
`
// const ButtonContainer = styled.TouchableOpacity(() => ({
//     margin: 15,
//     width: 100,
//     height: 40,
//     padding: 12,
//     borderRadius: 10,
//     backgroundColor: ${props => props.backgroundColor},
// }))

const ButtonText = styled.Text<TextPropsInterface>`
  font-size: 15px;
  color: ${props => props.textColor};
  text-align: center;
`
