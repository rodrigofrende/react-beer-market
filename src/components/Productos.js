import { Component } from 'react'

import Producto from './Producto'

const styles = {
  productos: {
  }
}


class Productos extends Component {
  render() {
    const { productos, agregarAlCarro } = this.props

    return (
      <div style={styles.productos} className='grid-productos'>
        {productos.map(producto => 
          <Producto 
            agregarAlCarro={agregarAlCarro}
            key={producto.id}
            producto={producto}
          />)
        }
      </div>
    )
  }
}

export default Productos