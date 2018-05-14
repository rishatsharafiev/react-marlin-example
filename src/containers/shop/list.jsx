import React, { Component } from 'react'
import ShopListDumb from 'components/shop/list'
import ShopSearchDumb from 'components/shop/search'
import shops from 'store/shops.json'

class Smart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shops,
      type: 'name',
      types: ['categories__main_title', 'cpa', 'host', 'id', 'name', 'rating', 'site', 'coupon_category_id'],
      filteredShops: shops,
    }
  }

  filter() {
    console.log(this.state.shops.map(shop => shop.keys()))
  }

  handleSearch() {
    console.log(this.state)
  }

  handleFilter() {
    console.log(this.state.type)
  }

  render() {
    console.log()
    return (
      <div>
        <ShopSearchDumb types={this.state.types} handleChange={() => { console.log('hello') }} />
        <ShopListDumb shops={this.state.filteredShops} />
      </div>
    )
  }
}

export default Smart

