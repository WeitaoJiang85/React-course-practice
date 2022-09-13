import React, { Component } from 'react'
import './Forecast.css'
export default class DailyForecast extends Component {
  render() {
    return (
      <div className="dailyForecast">
        <div>
          <div id="emoji">
            {this.props.conditions === 'Sunny' ? (
              <span> ☀️</span>
            ) : this.props.conditions === 'Stormy' ? (
              <span> ⛈️</span>
            ) : this.props.conditions === 'Rainy' ? (
              <span> ⛆</span>
            ) : this.props.conditions === 'Cloudy' ? (
              <span> ☁️</span>
            ) : null}
          </div>
          <h1 id="condition">{this.props.conditions}</h1>
          <h2 id="maxTemp">{this.props.maxTemp} &#8451;</h2>
          <h2>{this.props.wind} Km/H</h2>
          {this.props.maxTemp >= 35 ? (
            <label id="heatWarning"> 🌡️ Heatwave Warning</label>
          ) : null}
          {this.props.wind >= 30 ? (
            <label id="windWarning">🌬️ Strong Wind Warning</label>
          ) : (
            <br></br>
          )}
          <h2 id="day">{this.props.day}</h2>

          <div className="gridContainer">
            <div className="gridHead">
              <div className="hour">Hour</div>
              <div className="temperature">Temperature</div>
            </div>
            {this.props.hTemp.map((temp, i) => {
              return (
                <div className="gridBox">
                  <div className="time">{i}:00</div>
                  {temp >= 35 ? (
                    <div className="ab35">{temp}°C</div>
                  ) : temp >= 30 ? (
                    <div className="ab30">{temp}°C</div>
                  ) : temp >= 25 ? (
                    <div className="ab25">{temp}°C</div>
                  ) : temp >= 20 ? (
                    <div className="ab20">{temp}°C</div>
                  ) : temp >= 15 ? (
                    <div className="ab15">{temp}°C</div>
                  ) : temp >= 10 ? (
                    <div className="ab10">{temp}°C</div>
                  ) : (
                    <div className="cold">{temp}°C</div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}
