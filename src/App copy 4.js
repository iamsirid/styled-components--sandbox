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

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

function App() {
  return (
    <div>
      <Button>Normal</Button>
      <Button as="a" href="/">
        Link with Button style
      </Button>
      <TomatoButton as="a" href="/">
        Link with TomatoButton style
      </TomatoButton>
    </div>
  );
}

export default App;
