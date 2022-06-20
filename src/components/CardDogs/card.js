import React from 'react';
import { WrapperTransactionContainer } from './styled.js';


export default function CardDog({ handleAction, sendDog, picture }) {
  const { _id, animalBreed, animalSize, animalGender, animalVaccines, animalDescription, animalTemperament } = sendDog;
  const color = 'rgb(161, 240, 220)';


  const IMG = "../../image/".concat(picture);
  console.log(IMG);

  const handleActionButton = (event) => {
    const action = event.target.id;
    handleAction(action, sendDog);
  };



  return (
    <WrapperTransactionContainer
      style={{ background: color }}
      className="row valign-wrapper"
    >
      <WrapperTransactionContainer.description className="col s6 m10">
        <div class="card-image">
          <img src={IMG} className="circle" height='250px' width='80%' />
        </div>
        <div>
          <WrapperTransactionContainer.strong>
            Identificação:  &nbsp;
          </WrapperTransactionContainer.strong>
          <span>{_id}</span>
        </div>
        <div>
          <WrapperTransactionContainer.strong>
            Tamanho: &nbsp;
          </WrapperTransactionContainer.strong>
          <span>{animalSize}</span>
        </div>
        <div>
          <WrapperTransactionContainer.strong>
            Temperamento: &nbsp;
          </WrapperTransactionContainer.strong>
          <span>{animalTemperament}</span>
        </div>
      </WrapperTransactionContainer.description>
      <WrapperTransactionContainer.description className="col s6 m10">
        <div>
          <WrapperTransactionContainer.strong>
            Descrição: &nbsp;
          </WrapperTransactionContainer.strong>
          <span>{animalDescription}</span>
        </div>
        <div>
          <WrapperTransactionContainer.strong>
            Gênero: &nbsp;
          </WrapperTransactionContainer.strong>
          <span>{animalGender}</span>
        </div>
        <div>
          <WrapperTransactionContainer.strong>
            Raça: &nbsp;
          </WrapperTransactionContainer.strong>
          <span>{animalBreed}</span>
        </div>
        <div>
          <WrapperTransactionContainer.strong>
            Vacinas: &nbsp;
          </WrapperTransactionContainer.strong>
          <ol>
            <span>{animalVaccines.map((vaccine) => {
              return (
                <li>{vaccine}</li>
              )
            })}
            </span>
          </ol>
        </div>
      </WrapperTransactionContainer.description>
      <WrapperTransactionContainer.buttons className="col s2 m1 noPadding">
        <span
          className="waves-effect waves-light modal-trigger"
          data-target="modalNewAdoption"
          onClick={handleActionButton}
        >
          <WrapperTransactionContainer.icons
            className="material-icons"
            id="newAdoption"
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
