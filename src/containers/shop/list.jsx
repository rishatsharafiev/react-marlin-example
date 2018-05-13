import React, { Component } from 'react'
import ShopListDumb from 'components/shop/list'
import shops from 'store/shops.json'

class Smart extends Component {
  constructor() {
    super()
    this.state = { shops }
  }

  filter() {
    console.log(this.state)
  }

  handleSearch() {
    console.log(this.state)
  }

  handleFilter() {
    console.log(this.state)
  }

  render() {
    return <ShopListDumb shops={this.state.shops} />
  }
}

export default Smart

