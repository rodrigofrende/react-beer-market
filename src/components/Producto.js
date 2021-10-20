import { Component } from 'react'
import Button from './Button'

const styles = {
  title: {
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    margin: '0.2rem',
    paddingBottom: '0.8rem',
    fontSize: '2.5rem',
    textTransform: 'uppercase',
    fontFamily: `'Bebas Neue', 'cursive'`
  },
  footer: {
    justifyContent: 'space-around',
    display: 'flex'
  }
}

class Producto extends Component {
  render() {
    const { producto, agregarAlCarro } = this.props
    return (
      <div className='card-container'>
        <h1 style={styles.title} title={producto.name}> {producto.name}. </h1>
        <img className='img-producto' alt={producto.name} src={producto.image_url} />
        <p className='descripcion-producto' title={producto.description}>{producto.description}</p>
        <div id="footer" style={styles.footer}>
          <span title={'IBU is an abbreviation for the International Bitterness Units scale'}>IBU: {producto.ibu}</span>
          <span title={'ABV is an abbreviation for alcohol by volume'}>ABV: {producto.abv}</span>
          <span title={`Price: $ ${producto.attenuation_level}`}>$ {producto.attenuation_level}</span>
        </div>
        <p> 
          {/* alinear verticalmente, modal con extra datos & change <a>  */}
          <a href="/#">More details</a>
          <Button onClick={() => agregarAlCarro(producto)}>
            Add to cart
          </Button>
        </p>
      </div>
    )
  }
}

export default Producto