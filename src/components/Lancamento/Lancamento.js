import React from 'react';
import { WrapperTransactionContainer } from './styled.js';

export default function Lancamento({ handleAction, transaction }) {

  const { day, animalID, userName, yearMonthDay, status } = transaction;
  const color = status === 'nao-realizada' ? 'rgb(240, 161, 168)' : 'rgb(161, 240, 220)';
  const icon = 'check'

  const date = yearMonthDay;
  const resultDate = date.split("-", 3);
  const finalDate = resultDate.reverse().join('/');

  const handleActionButton = (event) => {
    const action = event.target.id;
    handleAction(action, transaction);
  };

  return (
    <WrapperTransactionContainer
      style={{ background: color }}
      className="row valign-wrapper"
    >
      <WrapperTransactionContainer.index className="col s2 m1">
        <span>{day.toString().padStart(2, '0')}</span>
      </WrapperTransactionContainer.index>
      <WrapperTransactionContainer.description className="col s8 m10">
        <span>Cão adotado:&nbsp;
          <WrapperTransactionContainer.strong>
            {animalID}
          </WrapperTransactionContainer.strong>
        </span>
        <span>Adotado por:&nbsp;
          <WrapperTransactionContainer.strong>
            {userName}
          </WrapperTransactionContainer.strong>
        </span>
        <span>Data da adoção: &nbsp;
          <WrapperTransactionContainer.strong>
            {finalDate}
          </WrapperTransactionContainer.strong>
        </span>
      </WrapperTransactionContainer.description>
      <WrapperTransactionContainer.buttons className="col s2 m1 noPadding">
        <span className="waves-effect waves-light" onClick={handleActionButton}>
          <WrapperTransactionContainer.icons
            className="material-icons"
          >
            {icon}
          </WrapperTransactionContainer.icons>
        </span>
      </WrapperTransactionContainer.buttons>
    </WrapperTransactionContainer>
  );
}
