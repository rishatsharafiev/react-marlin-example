import React from 'react'
import PropTypes from 'prop-types'

const Dumb = ({ shop }) => (
  <div className='shop'>
    <p className='shop--text'>{shop.name}</p>
  </div>
)

Dumb.propTypes = {
  shop: PropTypes.object.isRequired,
}

export default Dumb
