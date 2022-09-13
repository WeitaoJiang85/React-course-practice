import React, { Component } from 'react'
import Product from './Product.jsx'
import './ProductSearch.css'
const products = [
  {
    id: '1',
    name: 'Leather Jacket',
    img: 'https://www.politix.com.au/dw/image/v2/ABBA_PRD/on/demandware.static/-/Sites-politix-master-catalog/default/dw2593c8bf/images/hires/Winter%2021/A5/zl03-dk-brown-2.jpg?sw=2000&sh=2000&sm=fit',
    category: 'jackets',
    description:
      "Whether it's to protect from wind or just to look super cool, this leather jacket has you covered.",
    price: 400,
  },
  {
    id: '2',
    name: 'Wool cardigan',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLmFat1_qXYoNdEHY2AVYocA79EZWKxoewvg&usqp=CAU',
    category: 'jackets',
    description:
      'Beautifully warm and soft, this cardigan will make you feel cosy on a cold day.',
    price: 80,
  },
  {
    id: '3',
    name: 'Striped business shirt',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKo7PGOV3QOKsUg5QJ2qzNMxXZV2FaBAjpjA&usqp=CAU',
    category: 'shirts',
    description:
      'No ironing necessary to look professional every day with this striped shirt.',
    price: 50,
  },
  {
    id: '4',
    name: 'Short-sleeved polo shirt',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWjrSYTYburOuSTztdiJDcI2m7PLtvRrKBxzOq9Xjrazdbs_GsOdNsqf3I5UiMFkxErxg&usqp=CAU',
    category: 'shirts',
    description: 'The best shirt you can get for that business-casual look.',
    price: 30,
  },
  {
    id: '5',
    name: 'Plain business shirt',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbJrY661d3rLjw1hM1rbh2Yq5G8z726UqKww&usqp=CAU',
    category: 'shirts',
    description:
      'No ironing necessary to look professional every day with this plain business shirt.',
    price: 50,
  },
  {
    id: '6',
    name: 'Suit Jacket',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIrQxawOB3-9LYGhgnET4ZXfD3R5DcPf_smg&usqp=CAU',
    category: 'jackets',
    description: 'Wear it with jeans or suit pants, it works with both!',
    price: 120,
  },
  {
    id: '7',
    name: 'Suit Trousers',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTkp9MJz4nCNz3hmlQ6rD3m1x1Nrspsqf9bg&usqp=CAU',
    category: 'pants',
    description:
      "Get 5 of these and you've got pants for every day of the week.",
    price: 100,
  },
  {
    id: '8',
    name: 'Denim Jeans',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe2VmOLKtk4Cw1jKbt-im4ritFKAnCvg0BKg&usqp=CAU',
    category: 'pants',
    description:
      'A timeless classic, these denim jeans will never go out of style.',
    price: 80,
  },
]

export default class ProductList extends Component {
  state = { product_list: products, inputValue: '' }

  filterByKeyWords = () => {
    const inputValue = this.state.inputValue
    const searchResult = this.state.product_list.filter(
      (product) =>
        product.name.toLowerCase().includes(inputValue.toLowerCase()) ||
        product.description.toLowerCase().includes(inputValue.toLowerCase())
    )
    this.setState({
      product_list: searchResult.length > 0 ? searchResult : 'No matches found',
    })
  }

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value })
  }

  enterChange = (e) => {
    if (e.keyCode === 13) {
      this.filterByKeyWords()
    }
  }
  shirts = () => {
    this.setState({ product_list: products })
    this.setState((state) => ({
      product_list: state.product_list.filter((product) =>
        product.category.toLowerCase().includes('shirts')
      ),
    }))
  }

  pantsAndSkirts = () => {
    this.setState({ product_list: products })
    this.setState((state) => ({
      product_list: state.product_list.filter((product) =>
        product.category.toLowerCase().includes('pants' || 'skirts')
      ),
    }))
  }
  jackets = () => {
    this.setState({ product_list: products })
    this.setState((state) => ({
      product_list: state.product_list.filter((product) =>
        product.category.toLowerCase().includes('jackets')
      ),
    }))
  }

  priceUp = () => {
    this.setState((state) => ({
      product_list: state.product_list.sort((a, b) => a.price - b.price),
    }))
  }

  priceDown = () => {
    this.setState((state) => ({
      product_list: state.product_list.sort((a, b) => b.price - a.price),
    }))
  }

  defaultDisplay = () => {
    this.setState({ product_list: products })
  }
  render() {
    return (
      <div id="main-list">
        <ul>
          <li>
            <button onClick={this.defaultDisplay}>All Products</button>
          </li>
          <li>
            <button onClick={this.shirts}>Shirts</button>
          </li>
          <li>
            <button onClick={this.pantsAndSkirts}>Pants and skirts</button>
          </li>
          <li>
            <button onClick={this.jackets}>Jackets</button>
          </li>
          <li>
            <input
              type="text"
              onChange={this.handleChange}
              onKeyUp={this.enterChange}
              placeholder="Search by keyword"
            />
            <button onClick={this.filterByKeyWords}>Search by Keywords</button>
          </li>
          <li>
            <div className="dropdown">
              <button className="dropbtn">Sort by Price</button>
              <div className="dropdown-content">
                <button onClick={this.priceUp}>Price &nbsp; &uarr;</button>
                <button onClick={this.priceDown}>Price &nbsp; &darr;</button>
              </div>
            </div>
          </li>
        </ul>
        <div id="container">
          {this.state.product_list.map((product) => (
            <Product
              key={product.id}
              name={product.name}
              img={product.img}
              category={product.category}
              description={product.description}
              price={product.price}
            />
          ))}
        </div>
      </div>
    )
  }
}
