import React from 'react';
import { WrapperTransactionContainer } from './styled.js';

export default function CardDog({ handleAction, sendDog }) {

  const { animalBreed, animalSize, animalGender, animalVaccines, animalTemperament } = sendDog;
  const color = 'rgb(161, 240, 220)';

  const handleActionButton = (event) => {
    const action = event.target.id;
    handleAction(action, sendDog);
  };

  return (
    <WrapperTransactionContainer
      style={{ background: color }}
      className="row valign-wrapper"
    >
      <WrapperTransactionContainer.description className="col s4 m10">
        <span>Tamanho:&nbsp;
          <WrapperTransactionContainer.strong>
            {animalSize}
          </WrapperTransactionContainer.strong>
        </span>
        <span>Temperamento: &nbsp;
          <WrapperTransactionContainer.strong>
            {animalTemperament}
          </WrapperTransactionContainer.strong>
        </span>
        <span>Gênero: &nbsp;
          <WrapperTransactionContainer.strong>
            {animalGender}
          </WrapperTransactionContainer.strong>
        </span>
      </WrapperTransactionContainer.description>
      <WrapperTransactionContainer.description className="col s4 m10">
        <span>Raça:&nbsp;
          <WrapperTransactionContainer.strong>
            {animalBreed}
          </WrapperTransactionContainer.strong>
        </span>
        <span>Vacinas:&nbsp;
          <ul>
            {animalVaccines}
          </ul>
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
            pets
          </WrapperTransactionContainer.icons>
        </span>
        {/*<span className="waves-effect waves-light" onClick={handleActionButton}>
          <WrapperTransactionContainer.icons
            className="material-icons "
            id="delete"
          >
            delete
          </WrapperTransactionContainer.icons>
        </span>*/}
      </WrapperTransactionContainer.buttons>
    </WrapperTransactionContainer>
  );
}
