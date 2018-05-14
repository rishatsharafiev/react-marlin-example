import React from 'react'
import ShopItemDumb from 'components/shop/item'
import PropTypes from 'prop-types'

const Dumb = ({
  shops,
}) => (
  <div className='shops'>
    {
      (shops.length)
      ? shops.map(shop => (
        <ShopItemDumb key={shop.id} shop={shop} />
      ))
      : <div>Ничего не найдено</div>
    }
  </div>
)

Dumb.propTypes = {
  shops: PropTypes.array.isRequired,
}

export default Dumb
