import React from "react";
import styled from "styled-components";

const NavBar = styled.div`
  display: flex;
  justify-content: space-evenly;
  border: 2px solid orange;
  margin: 12px;
  background: #7393b3;
`;

const Header = styled.h1`
  text-color: white;
`;
const Banner = styled.div`
  display: flex;
  background: #d27d2d;
  justify-content: space-evenly;
  height: 500px;
  width: 100vw;
`;

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
  width: 100%;
  height: 100%;
`;
const Footer = styled.footer`
  justify-content: space-evenly;
  width: 100%;
  Height:700px;
   
`;

const Button = styled.button`
justify-content: space-evenly;
  width: 100%;
  Height 100%;
  border:3px solid #899499;
  background:#899499	
`;
 
const Comp = () => {
  return (
    <div>
      <NavBar>
        <Header>Home</Header>
        <Header>Browse store</Header>
        <Header>Sign-Up</Header>
      </NavBar>
      <Banner>
        <Box1>
          <Image
            src="https://images.unsplash.com/photo-1608671359422-8036f8c55a28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1296&q=60"
            alt=""
          />{" "}
        </Box1>
        <Box2>
          {/* <h2>We are Earth</h2> */}
          <Image
            src="https://images.unsplash.com/photo-1608671359422-8036f8c55a28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1296&q=60"
            alt="We are Earth"
          />
        </Box2>
      </Banner>
      <Footer>
        
          {" "}
          <Image src="https://images.unsplash.com/photo-1599940824399-b87987ceb72a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGVhcnRoJTIwZnJvbSUyMHNwYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" />
         
         
       <Button><strong>Sign-Up</strong></Button> 
      </Footer>
    </div>
  );
};

export default Comp;
