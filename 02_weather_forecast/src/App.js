import React, { Component } from 'react'
import './Forecast.css'
import DailyForecast from './DailyForecast.js'

const forecastData = [
  {
    id: 1,
    day: 'Monday',
    conditions: 'Sunny',
    maxTemp: 38,
    wind: 15,
    hTemp: [
      20, 20, 20, 19, 19, 20, 21, 21, 22, 25, 27, 30, 33, 33, 35, 35, 38, 35,
      35, 34, 30, 28, 24, 23, 21,
    ],
  },
  {
    id: 2,
    day: 'Tuesday',
    conditions: 'Stormy',
    maxTemp: 26,
    wind: 36,
    hTemp: [
      17, 17, 16, 16, 15, 15, 17, 17, 19, 19, 22, 22, 23, 23, 26, 25, 25, 23,
      20, 20, 18, 18, 18, 17, 17,
    ],
  },
  {
    id: 3,
    day: 'Wednesday',
    conditions: 'Rainy',
    maxTemp: 25,
    wind: 25,
    hTemp: [
      17, 17, 16, 16, 15, 15, 17, 17, 19, 19, 22, 22, 23, 23, 25, 25, 25, 23,
      20, 20, 18, 18, 17, 17, 17,
    ],
  },
  {
    id: 4,
    day: 'Thursday',
    conditions: 'Cloudy',
    maxTemp: 28,
    wind: 20,
    hTemp: [
      17, 17, 16, 16, 17, 17, 19, 19, 22, 22, 23, 23, 23, 25, 25, 28, 28, 25,
      25, 22, 20, 18, 18, 17, 17,
    ],
  },
  {
    id: 5,
    day: 'Friday',
    conditions: 'Sunny',
    maxTemp: 35,
    wind: 16,
    hTemp: [
      19, 19, 19, 20, 20, 20, 21, 23, 25, 26, 27, 30, 33, 33, 35, 34, 30, 28,
      27, 23, 20, 20, 19, 19, 19,
    ],
  },
]

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 id="head">Weather Forecast</h1>
        <div className="card">
          {forecastData.map((forecast) => (
            <DailyForecast
              key={forecast.id}
              day={forecast.day}
              conditions={forecast.conditions}
              maxTemp={forecast.maxTemp}
              wind={forecast.wind}
              hTemp={forecast.hTemp}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default App
