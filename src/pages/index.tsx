import Link from '@docusaurus/Link'
import useBaseUrl from '@docusaurus/useBaseUrl'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import * as React from 'react'

import { Button, Title } from '@habx/ui-core'

import { HomeImg, HomeMainContainer } from './Home.style'

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
