import React from 'react'
import styled from 'styled-components'
import { Box } from 'maki-toolkit'
import Container from 'components/Layout/Container'

const Outer = styled(Box)<{ background?: string }>`
  background: ${({ theme, background }) => background || theme.colors.gradients.bubblegum};
`

const Inner = styled(Container)`
  height: 200px;
  display: flex;
  width: 100%;
  align-items: center;

  @media (max-width: 600px) {
    padding-top: 12px;
    padding-bottom: 12px;
  }
`

const PageHeader: React.FC<{ background?: string }> = ({ background, children, ...props }) => (
  <Outer background={background} {...props}>
    <Inner>{children}</Inner>
  </Outer>
)

export default PageHeader
