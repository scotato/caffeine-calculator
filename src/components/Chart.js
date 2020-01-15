import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { Context } from "./Context"
import { Chart  } from './Layout'
import { getDatasets, getHourLabels } from '../helpers'
import { Line, defaults } from 'react-chartjs-2'

export default () => {
  const theme = useContext(ThemeContext)
  const { state } = useContext(Context)
  const { doses, isAddEdit, ...dose } = state
  const doseData = isAddEdit
    ? [...doses.filter(d => dose.id !== d.id), dose]
    : doses
  
  defaults.global.defaultFontColor = theme.grayscale[500]
  defaults.global.defaultFontFamily = theme.fontFamily
  defaults.global.defaultFontSize = 16

  const data = {
    labels: getHourLabels(),
    datasets: [{
      label: 'Caffeine',
      data: getDatasets(doseData),
      backgroundColor: theme.color.infoAlpha
    }]
  }

  const options = {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    tooltips: {
      callbacks: {
          title: item => item[0].xLabel,
          label: item => `${Math.round(item.yLabel)}mg`
      }
    },
    scales: {
      yAxes: [{
          ticks: {
              beginAtZero: true,
              callback: val => `${val}mg`
          }
      }]
    }
  }

  return (
    <Chart>
      <Line data={data} options={options} />
    </Chart>
  )  
}
