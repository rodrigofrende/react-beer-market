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
    position: 'fixed',
    padding: '0 50px',
    boxShadow: '0 2px 3px rgb(0, 0, 0, 0.3)',
    color: 'white'
  },
  title: {
    padding: '0 5px',
    margin: '0.3rem 0',
    fontSize: '1.2rem'
  },
  img: {
    cursor: 'pointer'
  }
}

class NavBar extends Component {
  render() {
    const { carro, showCarro, mostrarCarro, animation } = this.props
    return (
      <nav style={styles.navbar} className='nav-bar'>
        <div className='d-flex'>
          <img style={styles.img} onClick={() => window.scrollTo(0, 0)} src={logo} height='40px' alt="Logo" />
          <h1 style={styles.title}>React Beer Market</h1>
        </div>
        <Cart 
          carro={carro}
          showCarro={showCarro}
          mostrarCarro={mostrarCarro}
          animation={animation}
        />
      </nav>
    )
  }
}

export default NavBar