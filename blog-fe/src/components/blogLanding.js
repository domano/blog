import React from 'react'
import 'react-markdown'
import IconGithub from 'react-icons/lib/go/mark-github'
import 'bootstrap-css-only'
import Header from './header'
import Footer from './footer'
import RecentPosts from './recentPosts'
import Subscribe from './subscribe'
import BlogPost from './blogPost'
import { Parallax } from 'react-parallax'
import background from '../assets/brandi-redd-122054.jpg'
import { Grid, Row, Jumbotron, Col, Navbar, Well, Nav, NavItem, Button, NavDropdown, FormGroup, InputGroup, FormControl, MenuItem, PanelGroup, Panel, ListGroup, ListGroupItem } from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'

let bgStyle = {
  backgroundColor: 'rgba(245, 245, 245, 0.4)'
}

export default ({teasers, links}) => <Parallax bgImage={background} strength={400}>
  <Grid style={bgStyle}>
    <Row>
      <Header />
    </Row>
    <Row>
      <Col md={8}>
        {teasers.map((teaser) => 
        <Jumbotron ><Well>
          <h2>{teaser.title}</h2>
        <p>{teaser.description}</p>
        <p><Button block bsStyle="primary" href={teaser.href}>Read</Button></p>
        </Well></Jumbotron>
        )}
      </Col>
      <Col md={4} >
        <PanelGroup defaultActiveKey="2">
          <RecentPosts links={links}/>
          <Subscribe />
        </PanelGroup>
      </Col>
    </Row>
    <Row>
      <Footer />
    </Row>
  </Grid>
</Parallax>

