import React from 'react'
import PropTypes from 'prop-types'

const Counter = ({ count, increment }) => (
  <div>
    <button onClick={increment}>+1</button>
    <span>{` Count: ${count}`}</span>
  </div>
)

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired
}

export default Counter
