import { Component } from "react";

const styles = {
  title: {
    textDecoration: 'underline 3px solid rgb(10, 40, 62)',
    padding: '0 5px',
    margin: '0.3rem 0'
  }
}

class Title extends Component {
  render() {
    return (
      <h1 style={styles.title}>React Beer Market</h1>
    )
  }
}

export default Title