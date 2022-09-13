import React from 'react'
import './ProductPrice.css'
const ProductPrice = (props) => (
  <div className="card">
    <h2>{props.name}</h2>
    <img src={props.img} alt="Flowers" />
    <p>{props.description}</p>

    <h3>
      $ {props.price} {props.sale && <label>--ON SALE!!</label>}
    </h3>

    <button>Buy It!</button>
  </div>
)

export default ProductPrice
