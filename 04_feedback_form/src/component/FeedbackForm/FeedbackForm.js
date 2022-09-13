import React, { Component } from 'react'
import HappinessPicker from '../HappniessPicker/HappinessPicker.js'

export default class FeedbackForm extends Component {
  state = { food: 0, service: 0, money: 0 }
  addFoodScore = (v) => {
    this.setState({ food: v })
  }
  addServiceScore = (v) => {
    this.setState({ service: v })
  }

  addValueScore = (v) => {
    this.setState({ money: v })
  }

  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h1>Feedback Form</h1>
        <h2>Let us know how we didi!</h2>
        <h3 style={{ textAlign: 'left' }}>Food:{this.state.food}</h3>
        <HappinessPicker category={'food'} addScore={this.addFoodScore} />

        <h3 style={{ textAlign: 'left' }}>Service:{this.state.service}</h3>
        <HappinessPicker category={'service'} addScore={this.addServiceScore} />

        <h3 style={{ textAlign: 'left' }}>Value:{this.state.money}</h3>
        <HappinessPicker category={'value'} addScore={this.addValueScore} />
        <p style={{ fontSize: '2em', fontWeight: 'bold' }}>
          Total Score:
          {this.state.food + this.state.service + this.state.money}
          /12
        </p>
      </div>
    )
  }
}
