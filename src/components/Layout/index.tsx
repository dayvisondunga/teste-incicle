import React from 'react';

import Header from '../Header';
import Endomarketing from '../Endomarketing';
import LeftColumn from '../LeftColumn';
// import RightColumn from '../RightColumn';


import { Container } from './styles';

const Layout: React.FC = () => {
  return (
    <Container>
      <Header />

      <Endomarketing />
      
      <main>
        <LeftColumn />
        {/* <RightColumn /> */}
      </main>
    </Container>

  )


}

export default Layout;