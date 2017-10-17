import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'
// var LineChart = require('react-chartjs').Line;
import './index.css'

class Chart extends Component {
  constructor (props) {
    super(props)

    const getNextHour = hour => (
      hour < 12 ? ++hour : ++hour - 12
    )

    const getTimeline = (start = 12, duration = 24) => {
      let timeline = [ start ]

      while (timeline.length < duration) {
        let current = timeline[ timeline.length - 1 ]
        let next = getNextHour(current)
        timeline.push(next)
      }

      return timeline
    }

    const getHalflife = (total, time, halflife = 5.5) => (
      total * Math.pow(0.5, (time / halflife))
    )

    const getHalflifeData = data => {
      let total = 0
      return data.map((val, i) => {
        const halflife = getHalflife(total, 1) // 1 hour increment
        total = val ? halflife + val : halflife
        return total
      })
    }

    const getCaffeineData = (intake = {}, duration = 24) => {
      let data = []

      while (data.length < duration) {
        data.push(0)
      }

      Object.keys(intake).map(hour => {
        data[hour] = intake[hour]
      })

      return {
        label: 'caffeine',
        data: getHalflifeData(data)
      }
    }

    const intakeCaffeine = {
      10: 200,
      11: 100
    }

    const labels = getTimeline()
    const datasets = [
      getCaffeineData(intakeCaffeine)
    ]

    this.state = {
      options: {},
      data: {
        labels,
        datasets
      }
    }
  }

  render () {
    return (
      <div className='Chart'>
        <Line {...this.state} />
      </div>
    )
  }
}

export default Chart
