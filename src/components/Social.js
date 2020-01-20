import React from 'react'
import styled from 'styled-components'
import Icon from './Icon'

const Social = styled.div`
  display: grid;
  margin-bottom: ${props => props.theme.size[600]};
  margin-right: ${props => props.theme.size[500]};
  grid-template-columns: 
    ${props => props.theme.size[600]} 
    ${props => props.theme.size[600]} 
    ${props => props.theme.size[600]}
  ;
  grid-column-gap: ${props => props.theme.size[400]};
  justify-content: end;
`

const Link = styled.a`
  color: ${props => props.theme.grayscale[400]};

  &:hover,
  &:active,
  &:visited {
    color: ${props => props.theme.grayscale[400]};
  }
`

const items = [
  {
    title: "GitHub Source Code",
    icon: "github",
    url: "https://github.com/scotato/caffeine-calculator"
  },
  {
    title: "Twitter",
    icon: "twitter",
    url: "https://twitter.com/scotato"
  },
  {
    title: "Wikipedia Caffeine Pharmacokinetics",
    icon: "wikipedia",
    url: "https://en.wikipedia.org/wiki/Caffeine#Pharmacokinetics"
  }
]

export default () => (
  <Social>
    {items.map(item => (
      <Link
        href={item.url}
        title={item.title}
        key={item.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name={item.icon} size={600} />
      </Link>
    ))}
  </Social>
)
