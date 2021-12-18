import styled from 'styled-components';

export const Container = styled.div`
  background: var(--color-background);

  > h1 {
    margin-top: 8px;
    display: flex;
  }

  @media (min-width: 1180px) {
    > main {
      margin: 0 40px;
    }
  }

  .right-column {
    display: none;
  }

  @media (min-width: 1180px){
    .right-column {
      display: unset;
      
    }

    .left-column {
      margin: 0 25px 16px
    }
  }
`;