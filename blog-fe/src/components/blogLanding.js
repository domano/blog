import React from 'react'
import 'react-markdown'
import IconGithub from 'react-icons/lib/go/mark-github'
import '../styles/bootstrap.min.css'
import Header from './header'
import Footer from './footer'
import RecentPosts from './recentPosts'
import Subscribe from './subscribe'
import TagCloud from './tagcloud'
import Teaser from './teaser'
import { Parallax } from 'react-parallax'
import background from '../assets/wall.jpg'
import { Grid, Row, Jumbotron, Col, Navbar, Well, Nav, NavItem, Button, NavDropdown, FormGroup, InputGroup, FormControl, MenuItem, PanelGroup, Panel, ListGroup, ListGroupItem } from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'

let bgStyle = {
  backgroundColor: 'rgba(245, 245, 245, 0.1)'
}

export default ({teasers, links}) => <Parallax bgImage={background} strength={400}>
  <Grid style={bgStyle}>
    <Row>
      <Header />
    </Row>
    <Row>
      <Col md={8}>
        {teasers.map((teaser) => 
        <Teaser teaser={teaser}/>
        )}
      </Col>
      <Col md={4} >
        <PanelGroup defaultActiveKey="2">
          <RecentPosts links={links}/>
          <Subscribe />
          <TagCloud/>
        </PanelGroup>
      </Col>
    </Row>
    <Row>
      <Footer />
    </Row>
  </Grid>
</Parallax>

