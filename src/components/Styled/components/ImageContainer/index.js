// External Dependencies
import React from 'react'
import { Image } from 'react-native'
import styled from 'styled-components/native'

export default ({ source, children }) => (
  <ImageContainer source={source}>{children}</ImageContainer>
)

const ImageContainer = styled.Image`
  justify-content: center
  align-items: center
  width: 100%
`