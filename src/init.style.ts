import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  #root{
    font-family: KyoboHand;
  }
  .flex-column {
    display: flex;
    flex-direction: column;
  }
  .flex-column-reverse {
    display: flex;
    flex-direction: column-reverse;
  }

  .flex {
    display: flex;
  }
  .flex-reverse {
    display: flex;
    flex-direction: row-reverse;
  }

  .center {
    justify-content: center;
    align-items: center;
  }
  .full-width {
    width: 100%;
  }
  .full-height {
    height: 100%;
  }
  
  div{
    box-sizing: border-box;
  }
  @media (max-width: 620px) {
    body {
      font-size: 1rem;
    }
  }
  @media (min-width: 621px) {
    body {
      font-size: 1.2rem;
    }
  }
  
  @font-face {
    font-family: 'KyoboHand';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@1.0/KyoboHand.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
`;
