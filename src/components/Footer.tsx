import styled from 'styled-components';
import * as React from 'react';

const FooterContainer = styled.header`
  background-color: royalblue;
`

const Inner = styled.div`
  width: 1100px;
  height: 100px; 
  margin: 0 auto;
  background-color: orange;
`

const Footer: React.FC = () => {
  return(
    <FooterContainer>
      <Inner>footer</Inner>
    </FooterContainer>
  )
}

export default Footer;