import React from 'react';
import './App.css';

import styled from 'styled-components';

// const Input = styled.input.attrs(props => ({
//   // we can define static props
//   type: 'password',

//   // or we can define dynamic ones
//   size: props.size || '1em'
// }))`
const Input = styled.input.attrs(props => ({
  type: 'password',
  size: props.size || '1em'
}))`
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;

  /* here we use the dynamically computed prop */
  margin: ${props => props.size};
  padding: ${props => props.size};
`;

function App() {
  return (
    <div>
      <Input placeholder="A small text input" />
      <br />
      <Input placeholder="A bigger text input" size="2em" />
    </div>
  );
}

export default App;
