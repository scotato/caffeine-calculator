import React, { useEffect, useContext } from 'react'
import { Page, Title, Body, Actions } from './Layout'
import { ChartContext } from "./ChartContext"
import { Link } from './Button'
import Drinks from './Drinks'

export default () => {
  const [state, setState] = useContext(ChartContext)

  // eslint-disable-next-line
  useEffect(() => setState({ ...state, doseAddEdit: {} }), [])

  return (
    <Page>
      <Title>Caffeine Calculator</Title>
      <Body>
        <Drinks />
      </Body>
      <Actions>
        <Link to="add-drink" type="info">
          Add Drink
        </Link>
      </Actions>
    </Page>
  )
}
