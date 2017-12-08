import React from 'react';
import { Grid, Row, Jumbotron, Col, Navbar, Well, Nav, NavItem, Button, NavDropdown, FormGroup, InputGroup, FormControl, MenuItem, PanelGroup, Panel, ListGroup, ListGroupItem } from 'react-bootstrap'


export default (props) =>
  <Well>
    <h2>{props.teaser.title}</h2>
    <p>{props.teaser.description}</p>
    <Button bsClass="btn btn-primary center-block" style={{maxWidth: 400}} block bsStyle="primary" href={props.teaser.href}>Read</Button>
  </Well>