import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Blog from '../components/blog'
import BlogLanding from '../components/blogLanding'

let bla =`# 01 Basics
## Hello World
\`\`\`go
// file: hello.go
package main

import "fmt"

func main() {
    fmt.Println("Hello, 世界")
}
\`\`\`

Single file execution:
\`\`\`go
go run hello.go
\`\`\`

or using the [Golang Playground](https://play.golang.org/)

## Data types & variables
* Dynamic Memory Management
* Strongly typed
* All variables have a safe initial value
Declaration and allocation:
\`\`\`go
var i int
i = 42
\`\`\`

Declaration with inference:
\`\`\`go
i := 42
\`\`\``

storiesOf('Blog', module)
  .add('Blog', () => <Blog {...props}/>)

storiesOf('Blog Landing', module)
  .add('Blog Landing', () => <BlogLanding {...props} />)

let props = {
  links: [
    { href: "#", description: "Generating a Headless CMS-Api with Ponzu" },
    { href: "#", description: "Creating a blog with React and a Headless CMS" },
    { href: "#", description: "Real-Time Chat with React and Go" }
  ],
  teasers: [
    { href: "#", title: "Generating a Headless CMS-Api with Ponzu", description: "Some description for this thing is want to talk about." },
    { href: "#", title: "Creating a blog with React and a Headless CMS", description: "Some description for this thing is want to talk about." },
    { href: "#", title: "Real-Time Chat with React and Go", description: "Some description for this thing is want to talk about." }
  ],
  blogPost: bla
}



