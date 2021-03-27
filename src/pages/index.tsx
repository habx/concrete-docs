import Link from '@docusaurus/Link'
import useBaseUrl from '@docusaurus/useBaseUrl'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import * as React from 'react'
import styled from 'styled-components'

import { Background, breakpoints, Button, Title } from '@habx/ui-core'

import { DocuBackground } from '../components/DocuBackground'

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
  height: 600px;
`

export const HomeHeadlineContainer = styled.div`
  padding: 128px;
  display: grid;
  grid-gap: 32px;

  @media (${breakpoints.below.tablet}) {
    padding: 32px;
  }
`

export const Features = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  grid-gap: 64px;
  max-width: 1200px;
  margin: 64px auto;
  @media (${breakpoints.below.tablet}) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const FeatureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  img {
    width: 100%;
    margin-bottom: 32px;
  }
`

type FeatureProps = {
  label: string
  illustration: string
}

const features: FeatureProps[] = [
  {
    label: 'All the components you need',
    illustration: 'crank.svg',
  },
  {
    label: 'Shape as you want️',
    illustration: 'shapes-merging.svg',
  },
  {
    label: 'Made with React️',
    illustration: 'heart.svg',
  },
]

export const Feature: React.FunctionComponent<FeatureProps> = ({
  label,
  illustration,
}) => {
  const imgUrl = useBaseUrl(`img/illustrations/${illustration}`)
  return (
    <FeatureContainer>
      <img src={imgUrl} alt="" />
      <Title type="section">{label}</Title>
    </FeatureContainer>
  )
}

export default () => {
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
      <DocuBackground>
        <Features>
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </Features>
      </DocuBackground>
    </Layout>
  )
}
