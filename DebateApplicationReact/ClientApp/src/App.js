import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { InputResults } from './components/InputResults';
import { Registration } from './components/Registration';
import { ViewResults } from './components/ViewResults';
import { Statistics } from './components/Statistics';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/registration' component={Registration} />
        <Route path='/input-results' component={InputResults} />
        <Route path='/view-results' component={ViewResults} />
        <Route path='/statistics' component={Statistics} />
      </Layout>
    );
  }
}
