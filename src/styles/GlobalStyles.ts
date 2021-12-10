import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }
  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;

    width: 100%;
    height: 100%;
    
    background: var(--color-background);
  }
  *, button, input {
    border: 0;
    background: none;
    font-family: 'Open Sans';
  }
  html {
    background: var(--gray);
  }
  :root {
    --white: #ffffff;
    --gray: #d3d3d3;
    --color-background: #f5f5f5;
    --black: rgba(0,0,0);
    --text-endo: #707070;
  }
`;