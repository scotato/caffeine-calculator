import moment from 'moment'
import { STARTHOUR, DURATIONHOURS, CAFFEINEHALFLIFE } from './constants'

export const getTimestamp = hour => moment().hour(hour).format('ha')

const getHalflifeData = data => {
  let total = 0

  return data.map(val => {
    const halflife = total * Math.pow(0.5, (1 / CAFFEINEHALFLIFE)) // 1 hour increment
    total = val ? halflife + val : halflife
    return total
  })
}

export const getHourLabels = () => {
  const labels = Array
    .from({length: DURATIONHOURS}, () => 0)
    .map((hour, index) => ++index)
    .map(getTimestamp)

  return ArrayRotate(labels, STARTHOUR - 1)  
}

export const getDatasets = drinks => {
  // tally caffeine by hour
  const data = drinks.reduce((acc, cur) => {
    acc[cur.hour - 1] += (cur.drink.caffeine / cur.drink.oz * cur.quantity)
    return acc
  }, Array.from({length: DURATIONHOURS}, () => 0))

  const dataRotated = ArrayRotate(data, STARTHOUR - 1)
  const dataHalflife = getHalflifeData(dataRotated)

  return [{
    label: 'caffeine',
    data: dataHalflife
  }]
}

const ArrayRotate = (arr, count) =>
  arr.slice(count, arr.length).concat(arr.slice(0, count))
