import React, { Component } from 'react';

import Layout from './components/Layout/Layout'
import BurgerBilder from './containers/BurgerBuilder/BurgerBilder'

class App extends Component {

  render() {
    return (
      <div>
        <Layout>
          <BurgerBilder />
        </Layout>
      </div>
    );
  }
}

export default App;
