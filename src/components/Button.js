import React from 'react'

const Button = ({type, children}) =>
  <button
    className={`${type === 'red' ? 'red' : 'transparent'}`}
    >
    {children}
  </button>

export default Button
