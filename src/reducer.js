import { beverages } from './data'

function reducer(state, action) {
  switch (action.type) {
    case 'setDose':
      let dose = action.payload || newDose()
      return {
        ...state, 
        ...dose
      }
    case 'setDrink':
      return {
        ...state, 
        drink: action.payload,
        quantity: action.payload.oz
      }
    case 'setQuantity':
      return {
        ...state, 
        quantity: action.payload
      }
    case 'setHour':
      return {
        ...state, 
        hour: action.payload
      }
    case 'setId':
      return {
        ...state, 
        id: action.payload
      }
    case 'saveDose':
      return {
        ...state,
        doses: [
          ...state.doses.filter(dose => state.id !== dose.id), 
          {
            id: state.id,
            drink: state.drink,
            quantity: state.quantity,
            hour: state.hour
          }
        ]
      }
    case 'removeDose':
      return {
        ...state,
        doses: state.doses.filter(dose => action.payload !== dose.id.toString())
      }
    case 'clearDoses':
        return {
          ...state,
          doses: []
        }
    case 'setIsAddEdit':
        return {
          ...state, 
          isAddEdit: action.payload
        }
    default:
      throw new Error()
  }
}

const newDose = () => ({
  id: new Date().getTime(),
  drink: beverages[0],
  quantity: beverages[0].oz,
  hour: 8
})

const initialState = {
  id: null,
  doses: [],
  drink: beverages[0],
  quantity: beverages[0].oz,
  hour: 8,
  isAddEdit: false
}

export { reducer, initialState }
