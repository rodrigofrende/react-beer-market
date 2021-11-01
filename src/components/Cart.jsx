import { Component } from "react";
import BubbleAlert from "./BubbleAlert";
import Details from './Details';

const styles = {
  bubble: {
    position: 'relative',
    left: '8px',
    top: '5px'
  }
}

class Cart extends Component {
  render() {
    const { carro, showCarro, mostrarCarro, animation } = this.props
    const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0)
    return (
      <div>
        <span style={styles.bubble}>
          {cantidad !== 0 ? 
            <BubbleAlert value={cantidad} /> :
            null
          }
        </span>
        <img className={animation ? 'carrito cart-logo' : 'carrito'}  onClick={() => mostrarCarro()} src="https://icongr.am/fontawesome/cart-plus.svg?size=35&color=ffffff" alt="Cart" />
        {showCarro ? 
          <Details carro={carro} /> :
          null
        }
      </div>
    )
  }
}

export default Cart