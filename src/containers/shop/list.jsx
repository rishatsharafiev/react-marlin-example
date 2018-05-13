import React, { Component } from 'react'
import ShopListDumb from 'components/shop/list'
import shops from 'store/shops.json'

class Smart extends Component {
  constructor(props) {
    super(props)

    this.types = []

    const types = this.unique(this.concat(shops.map(shop => Object.keys(shop))))
    console.log(types)
    this.state = {
      shops,
      type: 'name',
      filteredShops: shops,
    }
  }

  concat(arrArg) {
    arrArg.forEach(item => Array.prototype.push.apply(this.types, item))
    return this.types
  }

  unique(arrArg) {
    this.types = arrArg.filter((elem, pos, arr) => arr.indexOf(elem) === pos)
    return this.types
  }

  filter() {
    console.log(this.state.shops.map(shop => shop.keys()))
  }

  handleSearch() {
    console.log(this.state)
  }

  handleFilter() {
    console.log(this.state)
  }

  render() {
    console.log()
    return (
      <div>
        <h1>{this.state.type}</h1>
        <ShopListDumb shops={this.state.filteredShops} />
      </div>
    )
  }
}

export default Smart

