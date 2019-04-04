import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render () {
    return (
      <header>
            <Navbar className="navbar-expand-lg navbar-toggleable-lg  border-bottom box-shadow mb-3 navbar-dark bg-dark" >
                <Container>
                  <NavbarBrand tag={Link} to="/">Клуб дебатов</NavbarBrand>
                <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                <Collapse className="d-lg-inline-flex " isOpen={!this.state.collapsed} navbar>
              <ul className="navbar-nav justify-content-between">
                <NavItem>
                                <NavLink tag={Link} className="mx-2" to="/round-registration">Зарегистрироваться на раунд</NavLink>
                </NavItem>
                <NavItem>
                                <NavLink tag={Link} className="mx-2" to="/input-results">Внести результаты</NavLink>
                </NavItem>
                <NavItem>
                                <NavLink tag={Link} className="mx-2" to="/view-results">Посмотреть результаты</NavLink>
                </NavItem>
                <NavItem>
                                <NavLink tag={Link} className="mx-2" to="/statistics">Статистика</NavLink>
                 </NavItem>
                   
                <NavItem>
                                <NavLink tag={Link} className="mx-2" to="/log-in">Войти</NavLink>
                </NavItem>
                <NavItem>
                                <NavLink tag={Link} className="mx-2" to="/sign-up">Зарегистрироваться</NavLink>
                </NavItem>
              </ul>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}
