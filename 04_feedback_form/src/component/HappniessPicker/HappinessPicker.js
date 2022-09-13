import React, { Component } from 'react'
import './feedBack.css'

const emoji = [
  {
    id: 1,
    emo: '😦',
    value: 0,
  },
  {
    id: 2,
    emo: '😞',
    value: 1,
  },
  {
    id: 3,
    emo: '😐',
    value: 2,
  },
  {
    id: 4,
    emo: '🙂',
    value: 3,
  },
  {
    id: 5,
    emo: '😁',
    value: 4,
  },
]

export default class HappinessPicker extends Component {
  render() {
    return (
      <div>
        {emoji.map((item) => (
          <span key={item.id}>
            <input
              type="radio"
              name={`${this.props.category}`}
              id={`${this.props.category}${item.value}`}
            />
            <label
              value={item.value}
              onClick={() => this.props.addScore(item.value)}
              htmlFor={`${this.props.category}${item.value}`}
            >
              {item.emo}
            </label>
          </span>
        ))}
      </div>
    )
  }
}
