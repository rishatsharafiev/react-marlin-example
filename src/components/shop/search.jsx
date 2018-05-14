import React from 'react'
import PropTypes from 'prop-types'

const Dumb = ({
  types, handleInputChange, handleSelectChange, selectedValue,
}) => (
  <div className='search'>
    <input className='search--input' type='text' placeholder='Поиск' onChange={handleInputChange} />
    <select className='search--select' value={selectedValue} onChange={handleSelectChange}>
      {types.map(type => (
        <option key={type} value={type}>{type}</option>
      ))}
    </select>
  </div>
)

Dumb.propTypes = {
  types: PropTypes.array.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSelectChange: PropTypes.func.isRequired,
  selectedValue: PropTypes.string,
}

Dumb.defaultProps = {
  selectedValue: 'name',
}


export default Dumb
