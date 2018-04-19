import React from 'react'
import Button from './Button'
import logo from '../images/logo.png'

const Header = () =>
<header className="header">
  <img src={logo} className="logo" alt="logo" />
  <Button type="red">
    Contacto
  </Button>
</header>

export default Header
