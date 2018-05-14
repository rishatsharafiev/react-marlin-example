import React from 'react'
import PropTypes from 'prop-types'

const Dumb = ({ shop }) => {
  const onClickHandler = () => { window.location = shop.deep_link }
  const onKeyPressHandler = () => { window.location = shop.deep_link }

  return (
    <div
      className='shop'
      onClick={onClickHandler}
      onKeyPress={onKeyPressHandler}
      role='link'
      tabIndex='0'
    >
      <div className='shop--logo' style={{ backgroundImage: `url(${shop.logo})` }} alt={shop.name} />
      <div className='shop--features'>
        <b>Характеристики</b>
        <ul>
          {shop.id && <li><u>shop.id:</u> {shop.id}</li> }
          {shop.name && <li><u>shop.name:</u> {shop.name}</li> }
          {shop.categories &&
            <li><u>shop.categories__main_title: </u>
              {shop.categories.map((category, index) => (
                (shop.categories.length - 1 !== index)
                  ? `${category.main_title}, `
                  : category.main_title
              ))}
            </li>
          }
          {shop.cpa && <li><u>shop.cpa:</u> {shop.cpa}</li> }
          {shop.rating && <li><u>shop.rating:</u> {shop.rating}</li> }
          {shop.host && <li><u>shop.host:</u> {shop.host}</li> }
          {shop.site && <li><u>shop.site:</u> {shop.site}</li> }
          {shop.coupon_category_id &&
            <li><u>shop.coupon_category_id: </u>
              {shop.coupon_category_id.map((coupon_category, index) => (
                (shop.coupon_category_id.length - 1 !== index)
                  ? `${coupon_category}, `
                  : coupon_category
              ))}
            </li>
          }
        </ul>
      </div>
    </div>
  )
}

Dumb.propTypes = {
  shop: PropTypes.object.isRequired,
}

export default Dumb
