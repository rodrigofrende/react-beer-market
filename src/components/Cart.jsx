import { Component } from "react";
import BubbleAlert from "./BubbleAlert";

const styles = {
  bubble: {
    position: 'relative',
    left: '8px',
    top: '5px'
  }
}

class Cart extends Component {
  render() {
    return (
      <div>
        <span style={styles.bubble}>
          <BubbleAlert />
        </span>
        <img src="https://icongr.am/fontawesome/cart-plus.svg?size=35&color=ffffff" alt="Cart" />
      </div>
    )
  }
}

export default Cart