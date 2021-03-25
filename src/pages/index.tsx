import Link from '@docusaurus/Link'
import useBaseUrl from '@docusaurus/useBaseUrl'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import * as React from 'react'
import styled from 'styled-components'

import { Background, Button, Title } from '@habx/ui-core'

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

export default function Home() {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context
  const imgUrl = useBaseUrl('img/cover.svg')

  return (
    <Layout
      title={`${siteConfig.title} documentation`}
      description="Design System By habx>"
    >
      <HomeImg src={imgUrl} alt="cover" />
      <HomeMainContainer>
        <Title type="headerBig">Making design concrete.</Title>
        <Link to={useBaseUrl('docs/')}>
          <Button secondary>Get Started</Button>
        </Link>
      </HomeMainContainer>
    </Layout>
  )
}
