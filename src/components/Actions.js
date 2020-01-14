import React, { useContext } from 'react'
import { ChartContext } from "./ChartContext";
import Button from './Button'
import { Actions  } from './Layout'

export default () => {
  const [state, setState, setDefaults] = useContext(ChartContext)
  const { drinks, drink, quantity, hour } = state

  const setIsAdding = () => setState({ ...state, isAdding: true })

  const addDrink = () => {
    setState({
      ...state,
      drinks: drinks.push({ drink, quantity, hour, id: new Date().getTime() })
    })
    setDefaults()
  }

  return (
    <Actions>
      {state.isAdding ? (
        <>
          <Button onClick={setDefaults} type='default'>Cancel</Button>
          <Button onClick={addDrink} type='success'>Add</Button>
        </>
      ) : (
        <Button onClick={setIsAdding} type='info'>Add Drink</Button>
      )}
    </Actions>
  )
}
