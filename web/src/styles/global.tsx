import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'Roboto Slab', sans-serif;

    border: 0;
    outline: 0;
  }

  button {
    cursor: pointer;
  }
`;
