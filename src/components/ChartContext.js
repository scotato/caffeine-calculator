import React, { useState } from 'react'

const ChartContext = React.createContext([{}, () => {}])

const ChartProvider = props => {
  const [state, setState] = useState({
    drinks: [],
    doseAddEdit: {}
  })

  return (
    <ChartContext.Provider value={[state, setState]}>
      {props.children}
    </ChartContext.Provider>
  )
}

export { ChartContext, ChartProvider }
