import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import queryString from 'query-string';
import Axios from 'axios';

import RedirectedPage from './pages/RedirectPage';
import './App.css';
import MainPage from './pages/Main';

const ENDPOINT = '{InitEndpoint you can find at the right side of PayHQ - Settings - Hosted pay Page}';
const DOMAIN = '{replace with your domain registered on PayHQ - Settings - Hosted Pay Page}';
const TOKEN = '{HPP Token generated on PayHQ - Settings - Hosted Pay Page}';

class App extends Component {
  /**
   * Initialize HPP Transaction by sending a post request and
   * redirect user to the Hosted Pay Page
   */
  postRquest = async () => {
    // ********************************************************
    // Transaction Data
    // amount, currency and domain must be included
    const requestBody = {
      // Amount to be charged
      amount: 140.49,
      // CAD or USD
      currency: 'CAD',
      // Domain registered in PayHQ - Settings - Hosted Pay Page when you setup
      // ex) https://payfirma-hpp-demo.web.app
      domain: DOMAIN,
      tax: 5.44,
      shipping_charge: 10.0,
      // State that needs to be contained with redirect URL when the transaction is done
      state: 'stateIWantToKeep'
    };

    // ********************************************************
    // Request header required
    const header = {
      headers: {
        // HPP Token generated through the PayHQ Settings page
        Authorization: `Bearer ${TOKEN}`,
        'Content-Type': 'application/json'
      }
    };

    // ********************************************************
    // Send a post request to initialize HPP Transaction
    Axios.post(ENDPOINT, requestBody, header).then(response => {
      // If Success
      if (response.status === 200) {
        // Users are linked to Payfirma Hosted Pay Page
        window.location.href = response.data.url;
      }
    });
  };

  render() {
    return (
      <Router>
        <Switch>
          {/* Redirect URL you registered on PayHQ - Settings - Hosted Pay Page */}
          {/* ex) https://payfirma-hpp-demo.web.app/return */}
          {/* Users will be redirected to here when they have processed a transaction through HPP */}
          <Route
            exact
            path={'/return'}
            render={props => {
              const parsed = queryString.parse(props.location.search);
              // Query parameters carried with the redirect URL after transaction
              // ex) https://payfirma-hpp-demo.web.app/return?result=success&lookup_id=123456&state=stateIWantToKeep
              const { result, lookup_id, state } = parsed;
              return <RedirectedPage result={result} lookup_id={lookup_id} state={state} styles={styles} />;
            }}
          />
          {/* Main demo page */}
          <Route exact path={'/'} render={props => <MainPage handlePostRequest={this.postRquest} styles={styles} />} />
        </Switch>
      </Router>
    );
  }
}

const styles = {
  app: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50
  },
  header: {
    color: '#ee6b2c',
    fontWeight: 400,
    fontSize: 50,
    marginBottom: 30
  },
  subheader: {
    color: '#ee6b2c',
    fontWeight: 600,
    fontSize: 30,
    marginBottom: 30
  },
  totalAmount: {
    marginTop: 10,
    fontWeight: 600,
    fontSize: 18
  },
  checkoutButton: {
    width: 200,
    height: 50,
    color: 'white',
    backgroundColor: '#ee6b2c',
    borderRadius: 5,
    fontSize: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    marginTop: 20,
    marginBottom: 20
  },
  field: {
    float: 'right',
    flexDirection: 'column',
    alignItems: 'flex-end'
  },
  values: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 15
  },
  info: {
    display: 'flex',
    justifyContent: 'center'
  }
};

export default App;
