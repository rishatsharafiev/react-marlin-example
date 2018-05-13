import React from 'react'
import ShopItemDumb from 'components/shop/item'
import PropTypes from 'prop-types'

const Dumb = ({
  shops,
}) => (
  <div className='shops'>
    {shops.map(shop => (
      <ShopItemDumb shop={shop} />
    ))}
  </div>
)

Dumb.propTypes = {
  shops: PropTypes.array.isRequired,
}

export default Dumb
