import Link from '@docusaurus/Link'
import useBaseUrl from '@docusaurus/useBaseUrl'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import * as React from 'react'
import styled from 'styled-components'

import { Background, breakpoints, Button, Title } from '@habx/ui-core'

export const HomeImg = styled.img`
  position: absolute;
  z-index: -1;
  min-width: 100%;
  height: 600px;
  object-fit: cover;
`

export const HomeMainContainer = styled(Background).attrs(() => ({
  backgroundColor: 'black',
}))`
  background: transparent !important;
`

export const HomeHeadlineContainer = styled.div`
  padding: 128px;
  display: grid;
  grid-gap: 32px;

  @media (${breakpoints.below.tablet}) {
    padding: 32px;
  }
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
      <HomeMainContainer>
        <HomeImg src={imgUrl} alt="cover" />
        <HomeHeadlineContainer>
          <Title type="headerBig">Making design concrete.</Title>
          <Link to={useBaseUrl('docs/')}>
            <Button secondary>Get Started</Button>
          </Link>
        </HomeHeadlineContainer>
      </HomeMainContainer>
    </Layout>
  )
}
