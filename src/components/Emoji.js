import React from 'react'
import styled from 'styled-components'

import { ReactComponent as Coffee } from '../emoji/2615.svg'
import { ReactComponent as Tea } from '../emoji/1f375.svg'
import { ReactComponent as Soda } from '../emoji/1f964.svg'
import { ReactComponent as LightningBold } from '../emoji/26a1.svg'

const EmojiSwitch = props => {
  switch (props.name) {
    case "coffee":
      return <Coffee />
    case "tea":
        return <Tea />
    case "soda":
        return <Soda />
    case "lightning-bolt":
        return <LightningBold />
    default:
      return null
  }
}

const Emoji = styled.div`
  display: grid;
  width: ${props => props.theme.size[props.size]};
  height: ${props => props.theme.size[props.size]};
  place-items: center;
  line-height: 1;

  .fa-secondary {
    opacity: 0.5;
  }

  svg {
    width: 100%;
    height: 100%;
  }
`

export default ({ size = 500, ...props }) => (
  <Emoji size={size} {...props}>
    <EmojiSwitch name={props.name} />
  </Emoji>
)