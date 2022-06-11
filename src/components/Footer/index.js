import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  padding: 10px;
  background: black;
  height: 80px;
  width: 100%;
  position: fixed;
  bottom: 0;
`;

const Text = styled.p`
  color: teal;
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
