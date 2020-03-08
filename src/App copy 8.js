import React from 'react';
import './App.css';

import styled, { createGlobalStyle } from 'styled-components';

const Thing = styled.div`
  && {
    color: blue;
  }
`;
const GlobalStyle = createGlobalStyle`
  div${Thing} {
    color: red;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Thing>I'm blue, da ba dee da ba daa</Thing>
    </>
  );
}

export default App;
