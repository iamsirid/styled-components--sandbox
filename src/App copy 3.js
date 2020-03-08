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
`;

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

function App() {
  return (
    <div>
      <Button>Normal</Button>
      <TomatoButton>Tomato</TomatoButton>
    </div>
  );
}

export default App;
