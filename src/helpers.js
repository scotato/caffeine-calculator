import { STARTHOUR, DURATIONHOURS, CAFFEINEHALFLIFE } from './constants'

const getHalflifeData = data => {
  let total = 0

  return data.map(val => {
    const halflife = total * Math.pow(0.5, (1 / CAFFEINEHALFLIFE)) // 1 hour increment
    total = val ? halflife + val : halflife
    return total
  })
}

const getNextHour = hour => (
  hour < 12 ? ++hour : ++hour - 12
)

export const getHourLabels = () => {
  let timeline = [ STARTHOUR ]

  while (timeline.length < DURATIONHOURS) {
    let current = timeline[ timeline.length - 1 ]
    let next = getNextHour(current)
    timeline.push(next)
  }

  return timeline
}

export const getDatasets = drinks => {
  // tally caffeine by hour
  let data = drinks.reduce((acc, cur) => {
    const index = cur.hour - STARTHOUR
    acc[index] += (cur.drink.caffeine / cur.drink.oz * cur.quantity)
    return acc
  }, Array.from({length: DURATIONHOURS}, () => 0))
  
  return [{
    label: 'caffeine',
    data: getHalflifeData(data)
  }]
}
