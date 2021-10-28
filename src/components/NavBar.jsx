import { Component } from "react";

import logo from '../assets/logo.png'
import Cart from './Cart'

const styles = {
  navbar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: '70px',
    backgroundColor: 'rgb(10, 40, 62)',
    justifyContent: 'space-between',
    position: 'relative',
    padding: '0 50px',
    boxShadow: '0 2px 3px rgb(0, 0, 0, 0.3)',
    color: 'white'
  }
}

class NavBar extends Component {
  render() {
    const { carro, showCarro, mostrarCarro } = this.props
    return (
      <nav style={styles.navbar}>
        <img src={logo} height='40px' alt="Logo" />
        <Cart 
          carro={carro}
          showCarro={showCarro}
          mostrarCarro={mostrarCarro}
        />
      </nav>
    )
  }
}

export default NavBar