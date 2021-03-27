import { usePluginData } from '@docusaurus/useGlobalData'
import 'react-medium-image-zoom/dist/styles.css'
import * as React from 'react'
import Zoom from 'react-medium-image-zoom'

export const FigmaNode: React.FunctionComponent<{
  id: string
  zoom?: boolean
}> = ({ id, zoom }) => {
  const figma = usePluginData('figma')
  const figmaData = JSON.parse(figma)
  if (zoom) {
    return (
      <Zoom>
        <img src={figmaData[id]} alt={id} />
      </Zoom>
    )
  }
  return <img src={figmaData[id]} alt={id} />
}
