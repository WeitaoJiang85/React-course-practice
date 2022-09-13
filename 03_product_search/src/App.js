import React, { Component } from 'react'
import ProductList from './Component/ProductList'
import './Component/ProductSearch.css'
class App extends Component {
  render() {
    return (
      <>
        <h1 id="brand"> Men's Wardrobe</h1>
        <ProductList />
      </>
    )
  }
}
export default App
