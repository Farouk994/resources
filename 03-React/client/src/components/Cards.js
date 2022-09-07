import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: raw;
  border: 2px solid green;
  margin: 10px;
`;

const Header = styled.h1`
  color: red;
  margin: 10px;
`;

const Text = styled.p`
  color: purple;
  padding: 25px;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  width: 100vw;
  display: flex;
  margin: 15px;
  flex-direction:
`;
// vw - viewWidth
// vh - viewHeight
const Image = styled.img`
  width: 45%;
 
`;
const Parent  = styled.div`
`

const Cards = () => {
  return (
    <div>
      <Wrapper>
        <Header>Cards</Header>
        <Header>Cards</Header>
        <Header>Cards</Header>
      </Wrapper>

      <Container>
        <Image
          src="https://images.unsplash.com/photo-1611651338412-8403fa6e3599?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9yc2NoZSUyMDkxMXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1200&q=60"
          alt="porsche"
        />
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          dignissim a mi non varius. Suspendisse vehicula eros aliquet massa
          maximus elementum. Sed pretium nulla vel mauris vehicula sollicitudin.
        </Text>
      </Container>

      <Container>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          dignissim a mi non varius. Suspendisse vehicula eros aliquet massa
          maximus elementum. Sed pretium nulla vel mauris vehicula sollicitudin.
        </Text>
        <Image
          src="https://images.unsplash.com/photo-1611651338412-8403fa6e3599?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9yc2NoZSUyMDkxMXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1200&q=60"
          alt="porsche"
        />
      </Container>
    </div>
  );
};

export default Cards;
