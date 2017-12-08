import React from 'react'
import 'react-markdown'
import IconGithub from 'react-icons/lib/go/mark-github'
import 'bootstrap-css-only'
import Header from './header'
import Footer from './footer'
import RecentPosts from './recentPosts'
import Subscribe from './subscribe'
import TagCloud from './tagcloud'
import BlogPost from './blogPost'
import { Parallax } from 'react-parallax'
import background from '../assets/wall.jpg'
import { Grid, Row, Col, Navbar, Well, Nav, NavItem, Button, NavDropdown, FormGroup, InputGroup, FormControl, MenuItem, PanelGroup, Panel, ListGroup, ListGroupItem } from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'

let bgStyle = {
  backgroundColor: 'rgba(245, 245, 245, 0.1)'
}

export default ({links, blogPost}) => <Parallax bgImage={background} strength={400}>
  <Grid style={bgStyle}>
    <Row>
      <Header />
    </Row>
    <Row>
      <Col md={8}>
        <BlogPost input={blogPost} />
      </Col>
      <Col md={4} >
        <PanelGroup>
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