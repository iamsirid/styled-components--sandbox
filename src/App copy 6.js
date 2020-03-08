import React from 'react';
import './App.css';

import styled from 'styled-components';

const Thing = styled.div.attrs(props => ({ tabIndex: 0 }))`
  color: blue;

  &:hover {
    color: red;
  }

  & ~ & {
    background: tomato;
  }

  & + & {
    background: lime;
  }

  &.something {
    background: orange;
  }

  .something-else & {
    border: 1px solid;
  }
`;

function App() {
  return (
    <React.Fragment>
      <Thing>Hello world!</Thing>
      <Thing>How ya doing?</Thing>
      <Thing className="something">The sun is shining...</Thing>
      <div>Pretty nice day today.</div>
      <Thing>Don't you think?</Thing>
      <div className="something-else">
        <Thing>Splendid.</Thing>
      </div>
    </React.Fragment>
  );
}

export default App;
