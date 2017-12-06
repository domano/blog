import React from 'react';
import { Grid, Row, Col, Navbar, Well, Nav, NavItem, Button, NavDropdown, FormGroup, InputGroup, FormControl, MenuItem, PanelGroup, Panel, ListGroup, ListGroupItem } from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'

export default ({input}) =>
  <Panel>
    <ReactMarkdown source={input} />
  </Panel>