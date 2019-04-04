import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { InputResults } from './components/InputResults';
import { RoundRegistration } from './components/RoundRegistration';
import { ViewResults } from './components/ViewResults';
import { Statistics } from './components/Statistics';
import { LogIn } from './components/LogIn';
import { SignUp } from './components/SignUp';


export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/round-registration' component={RoundRegistration} />
        <Route path='/input-results' component={InputResults} />
        <Route path='/view-results' component={ViewResults} />
        <Route path='/statistics' component={Statistics} />
        <Route path='/log-in' component={LogIn} />
        <Route path='/sign-up' component={SignUp} />
      </Layout>
    );
  }
}
