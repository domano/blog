import React from 'react'
import IconGithub from 'react-icons/lib/go/mark-github'
import { Navbar, Nav, NavItem, Button, NavDropdown, FormGroup, InputGroup, FormControl, MenuItem, PanelGroup, Panel, ListGroup, ListGroupItem } from 'react-bootstrap'

export default () =>
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        Dinos Blog
          </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={1} href="#">About me</NavItem>
      <NavItem eventKey={2} href="#">Tags</NavItem>
    </Nav>
    <Nav pullRight>
      <NavItem eventKey={2} href="https://github.com/domano">
        <IconGithub size={30} />
      </NavItem>
    </Nav>
  </Navbar>