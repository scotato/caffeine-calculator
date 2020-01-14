import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { ChartContext } from "./ChartContext"
import { Chart  } from './Layout'
import { getDatasets, getHourLabels } from '../helpers'
import { Line, defaults } from 'react-chartjs-2'

export default () => {
  const theme = useContext(ThemeContext)
  const [state] = useContext(ChartContext)
  const { drinks, doseAddEdit } = state
  const drinkData = doseAddEdit.id
    ? [...drinks.filter(dose => doseAddEdit.id !== dose.id), doseAddEdit]
    : drinks
  
  defaults.global.defaultFontColor = theme.colors.default
  defaults.global.defaultFontFamily = theme.fontFamily
  defaults.global.defaultFontSize = 16

  const data = {
    labels: getHourLabels(),
    datasets: [{
      label: 'Caffeine',
      data: getDatasets(drinkData),
      backgroundColor: theme.colors.infoAlpha
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
