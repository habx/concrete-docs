import useThemeContext from '@theme/hooks/useThemeContext'
import * as React from 'react'
import styled from 'styled-components'

import { Background, palette } from '@habx/ui-core'

const TransparentBackground = styled(Background)`
  background: transparent !important;
`

export const DocuBackground: React.FunctionComponent = ({ children }) => {
  const { isDarkTheme } = useThemeContext()

  return (
    <TransparentBackground
      backgroundColor={
        isDarkTheme
          ? palette.neutralWhiteWithIntensityFading[0]
          : palette.neutralWhiteWithIntensityFading[1000]
      }
    >
      {children}
    </TransparentBackground>
  )
}
