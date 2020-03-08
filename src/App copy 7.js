import React from 'react';
import './App.css';

import styled from 'styled-components';

const Thing = styled.div`
  color: blue;

  .something {
    border: 1px solid;
    display: block;
  }
`;

function App() {
  return (
    <Thing>
      <label htmlFor="foo-button" className="something">
        Mystery button
      </label>
      <button id="foo-button">What do I do?</button>
    </Thing>
  );
}

export default App;
