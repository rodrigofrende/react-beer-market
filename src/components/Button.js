import { Component } from 'react'

const styles = {
  button: {
    padding: '8px 15px',
    borderRadius: '10px',
    border: 'none',
    backgroundColor: 'rgb(10 40 62)',
    color: 'white',
    float: 'right',
    cursor: 'pointer',
    fontSize: '1rem',
    fontFamily: 'Stick No Bills'
  }
}

class Button extends Component {
  render() {
    return (
      <button style={styles.button}  {...this.props}> Add to cart </button> 
    )
  }
}

export default Button