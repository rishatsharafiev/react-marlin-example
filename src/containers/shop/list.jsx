import React, { Component } from 'react'
import ShopListDumb from 'components/shop/list'
import ShopSearchDumb from 'components/shop/search'
import shops from 'store/shops.json'

class Smart extends Component {
  state = {
    shops,
    type: 'name',
    types: ['categories__main_title', 'cpa', 'host', 'id', 'name', 'rating', 'site', 'coupon_category_id'],
    filteredShops: shops,
  }

  handleInputChange = (event) => {
    const {
      target: {
        value,
      },
    } = event

    let filteredShops = this.state.shops

    if (this.state.type === 'categories__main_title') {
      filteredShops = this.state.shops.filter(shop =>
        shop.categories && shop.categories.filter(category =>
          category.main_title && category.main_title.includes(value)).length)
    } else if (this.state.type === 'coupon_category_id') {
      filteredShops = this.state.shops.filter(shop =>
        this.state.type in shop
        && shop[this.state.type].includes(value))
    } else if (this.state.types.includes(this.state.type)) {
      filteredShops = this.state.shops.filter(shop =>
        this.state.type in shop
        && String(shop[this.state.type]).includes(value))
    } else if (value === '') {
      filteredShops = this.state.shops
    }
    this.setState({ filteredShops })
  }

  handleSelectChange = (event) => {
    const {
      target: {
        value,
      },
    } = event
    this.setState({ type: value })
  }

  render() {
    return (
      <div>
        <ShopSearchDumb
          types={this.state.types}
          handleInputChange={this.handleInputChange}
          handleSelectChange={this.handleSelectChange}
          selectedValue={this.state.type}
        />
        <ShopListDumb shops={this.state.filteredShops || this.state.shops} />
      </div>
    )
  }
}

export default Smart

