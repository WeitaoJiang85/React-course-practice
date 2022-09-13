import React, { Component } from 'react'
import './ProductSearch.css'
export default class Product extends Component {
  render() {
    return (
      <div className="box">
        <h2>{this.props.name}</h2>
        <img src={this.props.img} alt="products" />
        <p>{this.props.description}</p>
        <h1>$ {this.props.price}</h1>
      </div>
    )
  }
}
