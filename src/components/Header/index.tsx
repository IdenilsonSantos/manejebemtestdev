import React from 'react';
import { NavBar, Container, Image, Wrapper } from './styles';
import { ReactComponent as Logo } from './../../assets/logo.svg';

const Header: React.FC = () => {
  return (
  <>
    <NavBar>
        <Wrapper>
        <Container>
          <Image>
            <Logo></Logo>
            <small>Busca de Ceps</small>
          </Image>
        </Container>
        </Wrapper>
    </NavBar>
  </>
  );
}

export default Header;