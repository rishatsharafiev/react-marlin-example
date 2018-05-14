import React from 'react'
import PropTypes from 'prop-types'

const Dumb = ({ types, handleChange, selectedValue }) => (
  <div className='search'>
    <input className='search--input' type='text' placeholder='Поиск' onChange={handleChange} />
    <select className='search--select'>
      { selectedValue && selectedValue &&
        <option key={selectedValue}>{selectedValue}</option>
      }
      {types.map(type => (
        (type !== selectedValue) && <option key={type}>{type}</option>
      ))}
    </select>
  </div>
)

Dumb.propTypes = {
  types: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
  selectedValue: PropTypes.string,
}

Dumb.defaultProps = {
  selectedValue: 'name',
}


export default Dumb
