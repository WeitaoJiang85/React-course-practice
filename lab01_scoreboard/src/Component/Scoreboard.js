import { Component } from 'react'
import TeamScoreCounter from './TeamScore'
import './Scoreboard.css'
export default class Scoreboard extends Component {
  state = { Location: ' ' }
  setLocation = () => {
    this.setState({ Location: prompt('Add location') })
  }

  render() {
    return (
      <>
        <h1>Game:{this.state.Location}</h1>
        <button onClick={this.setLocation}>Set Game Location</button>
        <div id="container">
          <div className="teamScoreCounter">
            <TeamScoreCounter />
          </div>
          <div className="teamScoreCounter">
            <TeamScoreCounter />
          </div>
        </div>
      </>
    )
  }
}
