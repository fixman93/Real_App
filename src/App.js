import React, { Component } from 'react';

import Layout from './components/Layout/Layout'
import BurgerBilder from './containers/BurgerBuilder/BurgerBilder'
import Checkout from './containers/Checkout/Checkout'

class App extends Component {

  render() {
    return (
      <div>
        <Layout>
          <BurgerBilder />
          <Checkout />
        </Layout>
      </div>
    );
  }
}

export default App;
