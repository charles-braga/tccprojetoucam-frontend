import React from 'react';
import { WrapperTransactionContainer } from './styled.js';

export default function Lancamento({ handleAction, transaction }) {

  const { day, animalId, status } = transaction;
  const color = status === 'nao-realizada' ? 'rgb(240, 161, 168)' : 'rgb(161, 240, 220)';
  const icon = status === 'realizada' ? 'check' : 'block'

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
        <WrapperTransactionContainer.strong>
          {animalId}
        </WrapperTransactionContainer.strong>
        <span>{status}</span>
      </WrapperTransactionContainer.description>
      <WrapperTransactionContainer.buttons className="col s2 m1 noPadding">
        {/*<span
          className="waves-effect waves-light modal-trigger"
          data-target="modalUpdate"
          onClick={handleActionButton}
        >
          <WrapperTransactionContainer.icons
            className="material-icons "
            id="update"
          >
            update
          </WrapperTransactionContainer.icons>
        </span>*/}
        <span className="waves-effect waves-light" onClick={handleActionButton}>
          <WrapperTransactionContainer.icons
            className="material-icons"
            id="delete"
          >
            {icon}
          </WrapperTransactionContainer.icons>
        </span>
      </WrapperTransactionContainer.buttons>
    </WrapperTransactionContainer>
  );
}
