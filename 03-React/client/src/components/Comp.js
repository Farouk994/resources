import React from "react";
import styled from "styled-components";

const NavBar = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 12px;
  background: #212F3D;
`;

const Header = styled.h1`
  text-color: white;
`;
const Banner = styled.div`
  display: flex;
  background: #212F3D;
  justify-content: space-evenly;
  height: 500px;
  width: 100vw;
`;
const Box0 = styled.div``;

const Box1 = styled.div`
  border: 3px solid #cc7722;
  width: 35%;
  background: #e97451;
`;
const Box2 = styled.div`
  border: 3px solid #cc7722;
  width: 35%;
  background: #c19a6b;
`;
const Image = styled.img`
  width: 500px;
  height: 100%;
`;
const Footer = styled.footer`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: 470px;
`;

const Button = styled.button`
justify-content: space-evenly;
  width: 100%;
  Height 100%;
  border:3px solid #899499;
  background:#899499;	
`;

const Parent = styled.div`
  background:#273746;
`;

//const Container = styled.div``;

const Comp = () => {
  return (
    <Parent>
      <NavBar>
        <Header>Home</Header>
        <Header>Browse store</Header>
        <Header>Sign-Up</Header>
      </NavBar>
      <Banner>
        <Box1>
          <Image
            src="https://images.unsplash.com/photo-1421494756418-72f0f89c6bfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGZvb2QlMjB2ZWd8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
            alt=""
          />{" "}
        </Box1>
        <Box2>
          {/* <h2>We are Earth</h2> */}
          <Image
            src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZvb2QlMjBiYW5rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            alt=""
          />
        </Box2>
        
      </Banner>
      <Footer>
        {/* <Container></Container> */}

        <Button>
          <strong>Sign-Up</strong>
        </Button>
      </Footer>
    </Parent>
  );
};

export default Comp;
