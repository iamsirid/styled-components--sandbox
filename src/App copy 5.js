import React from 'react';
import './App.css';

import styled from 'styled-components';

const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  text-decoration: none;
`;

const ReveredButton = props => (
  <button {...props} children={props.children.split('').reverse()} />
);

function App() {
  return (
    <div>
      <Button>Normal</Button>
      <Button as="a" href="/">
        Link with Button style
      </Button>
      <Button as={ReveredButton}>ReveredButton</Button>
    </div>
  );
}

export default App;
