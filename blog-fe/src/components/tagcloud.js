import React from 'react';
import { TagCloud } from "react-tagcloud";
import { Panel } from 'react-bootstrap';

const data = [
  { value: "ES6", count: 38 },
  { value: "React", count: 30 },
  { value: "Golang", count: 28 },
  { value: "Websockets", count: 25 },
  { value: "Kafka", count: 5 },
  { value: "Linux", count: 10 },
  { value: "Ponzu", count: 4 },
  { value: "Elasticsearch", count: 33 },
];

export default () => (
  <Panel>
    <TagCloud minSize={12}
      maxSize={35}
      tags={data}
      onClick={tag => alert(`'${tag.value}' was selected!`)} />
  </Panel>
);