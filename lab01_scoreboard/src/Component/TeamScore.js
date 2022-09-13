import React, { Component } from 'react'
import './Scoreboard.css'
export default class TeamScoreCounter extends Component {
  state = { runs: 0, wicket: 0, teamName: '' }
  RunCount_1 = () => {
    this.setState({ runs: this.state.runs + 1 })
  }

  RunCount_4 = () => {
    this.setState({ runs: this.state.runs + 4 })
  }

  RunCount_6 = () => {
    this.setState({ runs: this.state.runs + 6 })
  }

  resetRunCount = () => {
    this.setState({ runs: 0 })
  }

  WicketCount = () => {
    this.setState({ wicket: this.state.wicket + 1 })
  }

  resetWicketCount = () => {
    this.setState({ wicket: 0 })
  }

  setTeamName = () => {
    this.setState({ teamName: prompt('Input your team name') })
  }
  render() {
    return (
      <div id="teamScore">
        <h2>Team Name: {this.state.teamName}</h2>
        <button onClick={this.setTeamName}>Set Your Team Name</button>
        <h3>{this.state.wicket >= 10 ? 'Your team are All OUT!!' : null}</h3>
        <p>
          Runs: {this.state.runs}&emsp;Wickets: {this.state.wicket}
        </p>
        <div id="buttonGroup_1">
          {this.state.wicket < 10 ? (
            <button onClick={this.RunCount_1}>1 Run</button>
          ) : null}
          {this.state.wicket < 10 ? (
            <button onClick={this.RunCount_4}>4 Run</button>
          ) : null}
          {this.state.wicket < 10 ? (
            <button onClick={this.RunCount_6}>6 Run</button>
          ) : null}
          {this.state.wicket < 10 ? (
            <button onClick={this.WicketCount}>1 wicket</button>
          ) : null}
        </div>
        <div id="buttonGroup_2">
          <button onClick={this.resetRunCount}>Reset Run</button>
          <button onClick={this.resetWicketCount}>Reset Wicket</button>
        </div>
      </div>
    )
  }
}
