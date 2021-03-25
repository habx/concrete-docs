import styled from 'styled-components'

import { Background } from '@habx/ui-core'

export const HomeImg = styled.img`
  position: absolute;
  z-index: -1;
  width: 100%;
`

export const HomeMainContainer = styled(Background).attrs(() => ({
  backgroundColor: 'black',
}))`
  display: grid;
  grid-gap: 32px;
  margin: 128px;
  background: transparent !important;
`
