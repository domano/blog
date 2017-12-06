import React from 'react';
import { Grid, Row, Col, Navbar, Well, Nav, NavItem, Button, NavDropdown, FormGroup, InputGroup, FormControl, MenuItem, PanelGroup, Panel, ListGroup, ListGroupItem } from 'react-bootstrap'

export default ({links}) =>
  <Panel header="Recent links" eventKey="1">
    <ListGroup>
      {links.map(link => 
        <ListGroupItem href={link.href}>{link.description}</ListGroupItem>
      )}
    </ListGroup>
  </Panel>
