import { Component } from 'react'
import Scoreboard from './Component/Scoreboard'
import './Component/Scoreboard.css'
class App extends Component {
  state = { compomemtArray: [1] }
  addScoreboard = () => {
    let arr = [...this.state.compomemtArray]
    arr.push(1)
    this.setState({ compomemtArray: arr })
  }
  render() {
    return (
      <>
        {this.state.compomemtArray.map((item, index) => (
          <Scoreboard key={index} />
        ))}
        <br />
        <button onClick={this.addScoreboard}>Add Game</button>
      </>
    )
  }
}
export default App
