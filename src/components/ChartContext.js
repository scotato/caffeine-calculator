import React, { useState } from 'react'
import { beverages } from '../data'

const ChartContext = React.createContext([{}, () => {}])

const ChartProvider = props => {
  const defaults = {
    isAdding: false,
    drinks: [],
    drink: beverages[0],
    quantity: beverages[0].oz,
    hour: 8
  }

  const [state, setState] = useState(defaults)

  const setDefaults = () => {
    setState({
      ...state,
      ...defaults,
      drinks: state.drinks
    })
  }

  return (
    <ChartContext.Provider value={[state, setState, setDefaults]}>
      {props.children}
    </ChartContext.Provider>
  )
}

export { ChartContext, ChartProvider }
