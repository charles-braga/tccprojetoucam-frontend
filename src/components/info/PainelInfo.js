import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border: 2px solid rgb(11, 161, 167);
  border-radius: 10px;
  margin-bottom: 20px;
  padding: 10px;
`;

export default function PainelInfo({ transactions }) {

  const { length } = transactions;
  return (
    <Wrapper>
      <div className="col s6 m3">
        <span>Adoções realizadas no periodo:  {length}</span>
      </div>
    </Wrapper>
  );
}
