import { Component } from "react";

const styles = {
  details: {
    backgroundColor: '#fff',
    position: 'absolute',
    marginTop: 30,
    boxShadow: '1px 5px 5px rgb(0,0,0,0.3',
    borderRadius: '5px',
    width: '300px',
    right: '50px',
    color: 'black',
    zIndex: '1'
  },
  ul: {
    margin: 0,
    padding: 0
  },
  li: {
    listStyleType: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '25px 20px',
    borderBottom: 'solid  1px #aaa'
  }
}

class Details extends Component {
  render() {
    const { carro } = this.props
    return (
      <div style={styles.details}>
        <ul style={styles.ul}>
          {carro.map(x => 
            <li style={styles.li} key={x.id}>
              <img className='details-img' width='18' height='60' src={x.image_url} alt={x.name} />
              <p className='detail-name'>{x.name} </p>
              <p>x {x.cantidad}</p>
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default Details