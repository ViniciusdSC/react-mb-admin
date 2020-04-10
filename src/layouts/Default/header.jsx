import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useStore } from 'react-redux';
// eslint-disable-next-line import/no-unresolved
import { removeToken } from '~/store/actions/auth';

export default function Header() {
  const store = useStore();
  const history = useHistory();

  const logout = () => {
    store.dispatch(removeToken());
    history.push('/auth/login');
  };

  // const UserIcon = () => <i className="far far-user" />;

  return (
    <Navbar className="main-header bg-white" collapseOnSelect expand="lg" bg="light" variant="light">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <NavDropdown title={<i className="far fa-user" />} id="collasible-nav-dropdown">
            <NavDropdown.Item onClick={logout}>
              Log out
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
