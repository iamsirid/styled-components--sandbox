import React from 'react';
import './App.css';

import styled, { ThemeProvider } from 'styled-components';

// const Input = styled.input.attrs(props => ({
//   // we can define static props
//   type: 'password',

//   // or we can define dynamic ones
//   size: props.size || '1em'
// }))`
const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
`;

Button.defaultProps = {
  theme: {
    main: 'palevioletred'
  }
};

const theme = {
  main: 'mediumseagreen'
};

function App() {
  return (
    <div>
      <Button>Normal</Button>
      <ThemeProvider theme={theme}>
        <Button>Theme</Button>
      </ThemeProvider>
    </div>
  );
}

export default App;
