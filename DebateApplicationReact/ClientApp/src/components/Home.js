import React, { Component } from 'react';


import { HomeLayout } from './homeComponents/HomeLayout';






export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
        <div>
            <HomeLayout />
               
            
      </div>
    );
  }
}
