import { Component } from 'react'
import axios from 'axios'

import Productos from './components/Productos'
import Layout from './components/Layout'
import Title from './components/Title'
import NavBar from './components/NavBar'

class App extends Component {
  state = {
    productos: []
  }
  componentDidMount() {
    this.getProductos();
  }

  async getProductos() {
    const { data } = await axios.get('https://api.punkapi.com/v2/beers', { headers: {'Content-Type': 'application/json'}})
    console.log('lo q llego del json', data)
    this.setState({ productos: data.sort(function() { return Math.random() - 0.5 })})
  }
  render() {
    return (
      <div>
        <NavBar />
        <Layout>
          <Title />
          <Productos
            agregarAlCarro={() => console.log('add to carro')}
            productos={this.state.productos}
          />
        </Layout>
      </div>
    )
  }
}

export default App;
