import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 10px;
  background: #1de9b6;
  height: 50px;
  width: 100%;
  position: fixed;
  bottom: 0;
  z-index: 100;
`;

const Text = styled.p`
  color: black;
  font-size: 1.2rem;
  font-weight: 600;
  
`;

export default function Footer() {
  return (
    <Wrapper>
      <Text>
        Portal Amigo do Pet
        © 2022
      </Text>
    </Wrapper>
  );
}
