import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import { MenuExampleSecondary } from './components/MenuExampleSecondary';




export class HomeLayout extends Component {
    static displayName = HomeLayout.name;

    render() {
        return (
            <div>
                <MenuExampleSecondary />

                <Segment>
                    {this.props.children}
                </Segment>
            </div>
        );
    }
}
