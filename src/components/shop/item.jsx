import React from 'react'
import PropTypes from 'prop-types'

const Dumb = ({ shop }) => {
  const onClickHandler = () => { window.location = shop.deep_link }
  const onKeyPressHandler = () => { }

  return (
    <div
      className='shop'
      onClick={onClickHandler}
      onKeyPress={onKeyPressHandler}
      role='link'
      tabIndex='0'
    >
      <p className='shop--text'>{shop.name}</p>
      <div className='shop--logo' style={{ backgroundImage: `url(${shop.logo})` }} />
    </div>
  )
}

Dumb.propTypes = {
  shop: PropTypes.object.isRequired,
}

export default Dumb
