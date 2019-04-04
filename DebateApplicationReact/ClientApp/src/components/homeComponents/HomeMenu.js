import React, { Component } from 'react';
import { Input, Menu } from 'semantic-ui-react';


export class HomeMenu extends Component {
    state = { activeItem: 'профиль' }

    handleItemClick = (e, { name }) => {
        
        this.setState({ activeItem: name }, () => {
            this.props.func(this.state.activeItem)
            }
        )
        
        
    }
    

    render() {
        const { activeItem } = this.state

        return (
            <Menu secondary stackable>
                <Menu.Item name='профиль' active={activeItem === 'профиль'} onClick={this.handleItemClick} />
                <Menu.Item
                    name='информация'
                    active={activeItem === 'информация'}
                    onClick={this.handleItemClick}
                    
                />
                <Menu.Item
                    name='запланированные_раунды'
                    active={activeItem === 'запланированные_раунды'}
                    onClick={this.handleItemClick}

                />
                <Menu.Item
                    name='судейство'
                    active={activeItem === 'судейство'}
                    onClick={this.handleItemClick}

                />
                <Menu.Menu position='right'>
                    
                    <Menu.Item
                        name='выйти'
                        active={activeItem === 'выйти'}
                        onClick={this.handleItemClick}
                    />
                </Menu.Menu>
            </Menu>
        )
    }
}

