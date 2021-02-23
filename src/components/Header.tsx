import styled from 'styled-components';
import * as React from 'react';

const HeaderContainer = styled.header`
  background-color: royalblue;
`

const Inner = styled.div`
  width: 1100px;
  height: 100px; 
  margin: 0 auto;
  background-color: orange;
`

const Header: React.FC = () => {
  return(
    <HeaderContainer>
      <Inner>커머쓱</Inner>
    </HeaderContainer>
  )
}

export default Header;