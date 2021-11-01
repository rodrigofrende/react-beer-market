import { Component } from 'react'
import axios from 'axios'

import Productos from './components/Productos'
import Layout from './components/Layout'
import NavBar from './components/NavBar'

class App extends Component {
  state = {
    productos: [],
    carro: [
    ],
    showCarro: false,
    animation: false
  }
  componentDidMount() {
    this.getProductos();
  }

  mostrarCarro = () => {
    if(!this.state.carro.length) {
      return
    }
    debugger
    this.setState({ animation: !this.state.animation })
    console.log('animatio: ', this.state.animation)
    this.setState({ showCarro: !this.state.showCarro })
  }

  agregarAlCarro = (producto) => {
    const { carro } = this.state

    if (carro.find(x => x.id === producto.id)) {
      const newCarro = carro.map(x => x.id === producto.id ? ({
        ...x,
        cantidad: x.cantidad + 1
      })
      : x)

      return this.setState({ carro: newCarro })
    }

    return this.setState({
      carro: this.state.carro.concat({
        ...producto,
        cantidad: 1
      })
    })
  }

  async getProductos() {
    const { data } = await axios.get('https://api.punkapi.com/v2/beers', { headers: {'Content-Type': 'application/json'}})
    console.log('lo q llego del json', data)
    this.setState({ productos: data.sort(function() { return Math.random() - 0.5 })})
  }
  render() {
    const { showCarro } = this.state
    return (
      <div className='backdrop'>
        <NavBar 
          mostrarCarro={this.mostrarCarro}
          showCarro={showCarro}
          carro={this.state.carro}
          animation={this.state.animation}
        />
        <Layout className='layout'>
          <Productos
            agregarAlCarro={this.agregarAlCarro}
            productos={this.state.productos}
          />
        </Layout>
      </div>
    )
  }
}

export default App;
