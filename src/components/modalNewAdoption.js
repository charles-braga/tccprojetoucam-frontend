import React, { useState, useEffect } from 'react';
import DataService from '../services/DataService.js';

export default function ModalNewAdoption({ onChange, dog }) {

  const initialAdoptionState = {
    animalID: dog._id,
    userName: '',
    yearMonthDay: '',
  };

  const controlledDate = {
    minValue: '1940-01-01',
  };


  const [newAdoption, setNewAdoption] = useState(initialAdoptionState);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const handleDate = () => {
      const { yearMonthDay } = newAdoption;
      const { minValue } = controlledDate;

      if (yearMonthDay < minValue) {
        setErrorMessage(
          `O Periodo aceito é entre 01-01-1940 e data atual`
        );
        return;
      }
      setErrorMessage('');
    };

    handleDate();
  }, [controlledDate, newAdoption]);

  {/*const handleRadio = (event) => {
    const { name, value } = event.target;
    let type = '-';
    if (value === 'Receita') {
      type = '+';
    }
    setNewUser({ ...newUser, [name]: type });
  };*/}



  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewAdoption({ ...newAdoption, [name]: value });
    console.log(newAdoption);
  };

  const handleSubmit = () => {
    var data = {
      animalID: newAdoption.animalID,
      userName: newAdoption.userName,
      yearMonthDay: newAdoption.yearMonthDay,
    };


    DataService.newAdoption(data)
      .then((response) => {
        setNewAdoption({
          animalID: response.data.animalID,
          userName: response.data.userName,
          yearMonthDay: response.data.yearMonthDay,
        });
        setSubmitted(true);
        setNewAdoption(initialAdoptionState);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCloseButton = () => {
    setNewAdoption(initialAdoptionState);
    setSubmitted(false);
    onChange(submitted);
  };

  const handleNewAdoption = () => {
    setNewAdoption(initialAdoptionState);
    setSubmitted(false);
  };

  const { minValue } = controlledDate;

  return (
    <div className="submit-form">
      {submitted ? (
        <div id="modalNewAdoption" className="modal">
          <div className="modal-title valign-wrapper">
            <h5>Nova Adoção</h5>
            <button
              onClick={handleCloseButton}
              className="modal-close waves-effect waves-red btn-flat red"
            >
              X
            </button>
          </div>
          <div className="modal-content modal-success">
            <h6>Adoção realizada com sucesso!</h6>
          </div>
          <div className="modal-footer">
            <button
              className="waves-effect waves-green btn-flat teal white-text"
              onClick={handleNewAdoption}
            >
              Novo
            </button>
          </div>
        </div>
      ) : (
        <div id="modalNewAdoption" className="modal">
          <div className="modal-title valign-wrapper">
            <h5>Nova Adoção</h5>
            <button
              onClick={handleCloseButton}
              className="modal-close waves-effect waves-red btn-flat red"
            >
              X
            </button>
          </div>
          <div className="modal-content">
            {/*<div className="tipoLancamento form-group">
              <label>
                <input
                  name="type"
                  type="radio"
                  className="form-control"
                  value="Despesa"
                  onChange={handleRadio}
                />
                <span className="red-text">Despesa</span>
              </label>

              <label>
                <input
                  name="type"
                  type="radio"
                  className="form-control"
                  value="Receita"
                  onChange={handleRadio}
                />
                <span className="teal-text">Receita</span>
              </label>
            </div>*/}

            <div className="input-field col s12 form-group">
              <input
                id="animalId"
                name="animalId"
                type="text"
                className="validate form-control"
                value={dog._id}
                placeholder={dog._id}
                onChange={handleInputChange}
                autoFocus
                autoComplete
              />
              <label htmlFor="name">Animal</label>
            </div>
            <div className="input-field col s12 form-group">
              <input
                id="userName"
                name="userName"
                type="text"
                className="validate form-control"
                value={newAdoption.userName}
                onChange={handleInputChange}
                autoFocus
              />
              <label htmlFor="userName">Adotante</label>
            </div>

            <div className="row valign-wrapper noMargin">
              <div className="col s12 form-group">
                <input
                  name="yearMonthDay"
                  type="date"
                  className="form-control"
                  min={minValue}
                  value={newAdoption.yearMonthDay}
                  onChange={handleInputChange}
                  autoFocus
                />
              </div>
            </div>
            <span style={{ color: 'red', marginLeft: '20px' }}>
              {errorMessage}
            </span>
          </div>
          <div className="modal-footer noPadding">
            <button
              type="submit"
              className="waves-effect waves-green btn-flat teal white-text"
              onClick={handleSubmit}
              disabled={errorMessage.trim() !== ''}
            >
              Registrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
