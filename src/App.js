import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import Layout from './components/Layout/Layout'
import BurgerBilder from './containers/BurgerBuilder/BurgerBilder'
import Checkout from './containers/Checkout/Checkout'

class App extends Component {

  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/" exact component={BurgerBilder} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
