import React, { FunctionComponent } from 'react'

import styled, { css } from '@emotion/native'

type CategoryProps = {
  name: string
}

const Categories: FunctionComponent<CategoryProps> = props => (
  <Name>{props.name}</Name>
)

export default Categories

// const Container = styled.View``

const Name = styled.Text`
  font-size: 28px;
  font-weight: 600;
  margin-left: 15px;
  color: #bcbece;
`
