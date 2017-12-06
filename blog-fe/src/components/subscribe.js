import React from 'react';
import { Grid, Row, Col, Navbar, Well, Nav, NavItem, Button, NavDropdown, FormGroup, InputGroup, FormControl, MenuItem, PanelGroup, Panel, ListGroup, ListGroupItem } from 'react-bootstrap'

export default () =>
  <Panel header="Subscribe" eventKey="2">
    <form>
      <FormGroup>
        <InputGroup>
          <InputGroup.Addon>@</InputGroup.Addon>
          <FormControl type="text" />
        </InputGroup>
      </FormGroup>
      <Button>Subscribe</Button>
    </form>
  </Panel>