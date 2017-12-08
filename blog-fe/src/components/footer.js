import React from 'react';
import { Grid, Row, Col, Navbar, Well, Nav, NavItem, Button, NavDropdown, FormGroup, InputGroup, FormControl, MenuItem, PanelGroup, Panel, ListGroup, ListGroupItem } from 'react-bootstrap'

export default () => 
  <Navbar>
  <Nav pullRight>
    <NavItem eventKey={1} href="#">About</NavItem>
    <NavItem eventKey={2} href="#">Privacy Policy</NavItem>
    <NavItem eventKey={4}>Copyright © Dino Omanovic</NavItem>
  </Nav>
</Navbar>

