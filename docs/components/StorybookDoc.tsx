import * as React from 'react'

export const StorybookDoc: React.VoidFunctionComponent<StorybookDocProps> = (
  props
) => {
  const DEFAULT_HEIGHT = 800
  const [height, setHeight] = React.useState(DEFAULT_HEIGHT)
  const iframeRef = React.useRef(null)
  const handleLoad = () => {
    const iframeDocument = iframeRef.current.contentWindow.document
    let hasStory = true
    while (hasStory) {
      try {
        iframeDocument.getElementById('stories').nextSibling.remove()
      } catch {
        hasStory = false
        iframeDocument.getElementById('stories').remove()
        iframeDocument
          .getElementsByClassName('sbdocs-title')
          .forEach((node) => node.remove())
      }
    }
    if (DEFAULT_HEIGHT === height) {
      setHeight(iframeDocument.body.offsetHeight)
    }
  }
  return (
    <iframe
      ref={iframeRef}
      frameBorder="0"
      width="100%"
      height={`${height}px`}
      onLoad={handleLoad}
      {...props}
    />
  )
}

interface StorybookDocProps extends React.HTMLProps<HTMLIFrameElement> {}
