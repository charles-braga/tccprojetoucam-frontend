import React from 'react';
import { WrapperTransactionContainer } from './styled.js';

export default function CardUser({ handleAction, sendUser }) {

  console.log({ sendUser });
  const { name, email, contact } = sendUser;
  const color = 'rgb(161, 240, 220)';


  const handleActionButton = (event) => {
    const action = event.target.id;
    handleAction(action, sendUser);
  };

  return (
    <WrapperTransactionContainer
      style={{ background: color }}
      className="row valign-wrapper"
    >
      <WrapperTransactionContainer.description className="col s10 m10">
        <span>Nome:&nbsp;
          <WrapperTransactionContainer.strong>
            {name}
          </WrapperTransactionContainer.strong>
        </span>
        <span>E-mail:&nbsp;
          <WrapperTransactionContainer.strong>
            {email}
          </WrapperTransactionContainer.strong>
        </span>
        <span>Telefone: &nbsp;
          <WrapperTransactionContainer.strong>
            {contact}
          </WrapperTransactionContainer.strong>
        </span>
      </WrapperTransactionContainer.description>
      <WrapperTransactionContainer.buttons className="col s2 m1 noPadding">
        <span
          className="waves-effect waves-light modal-trigger"
          data-target="modalUpdate"
          onClick={handleActionButton}
        >
          <WrapperTransactionContainer.icons
            className="material-icons "
            id="update"
          >
            edit
          </WrapperTransactionContainer.icons>
        </span>
        <span className="waves-effect waves-light" onClick={handleActionButton}>
          <WrapperTransactionContainer.icons
            className="material-icons "
            id="delete"
          >
            delete
          </WrapperTransactionContainer.icons>
        </span>
      </WrapperTransactionContainer.buttons>
    </WrapperTransactionContainer>
  );
}
