import React, { useState, useEffect } from 'react';
import DataService from '../services/DataService.js';

export default function ModalNew({ onChange }) {
  const initialUserState = {
    name: '',
    password: '',
    email: '',
    birthDate: '',
    contact: '',
    address: '',
  };

  const controlledDate = {
    minValue: '1940-01-01',
  };

  const [newUser, setNewUser] = useState(initialUserState);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const handleDate = () => {
      const { birthDate } = newUser;
      const { minValue } = controlledDate;

      if (birthDate < minValue) {
        setErrorMessage(
          `O Periodo aceito é entre 01-01-1940 e data atual`
        );
        return;
      }
      setErrorMessage('');
    };

    handleDate();
  }, [controlledDate, newUser]);

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
    setNewUser({ ...newUser, [name]: value });
  };

  const handleSubmit = () => {
    var data = {
      name: newUser.name,
      password: newUser.password,
      email: newUser.email,
      birthDate: newUser.birthDate,
      contact: newUser.contact,
      address: newUser.address,
    };


    DataService.newUser(data)
      .then((response) => {
        setNewUser({
          name: response.data.name,
          password: response.data.password,
          email: response.data.email,
          birthDate: response.data.birthDate,
          contact: response.data.contact,
          address: response.data.address,
        });
        setSubmitted(true);
        setNewUser(initialUserState);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCloseButton = () => {
    setNewUser(initialUserState);
    setSubmitted(false);
    onChange(submitted);
  };

  const handleNewUser = () => {
    setNewUser(initialUserState);
    setSubmitted(false);
  };

  const { minValue } = controlledDate;

  return (
    <div className="submit-form">
      {submitted ? (
        <div id="modalNew" className="modal">
          <div className="modal-title valign-wrapper">
            <h5>Novo Usuário</h5>
            <button
              onClick={handleCloseButton}
              className="modal-close waves-effect waves-red btn-flat red"
            >
              X
            </button>
          </div>
          <div className="modal-content modal-success">
            <h6>Usuário cadastrado com sucesso!</h6>
          </div>
          <div className="modal-footer">
            <button
              className="waves-effect waves-green btn-flat teal white-text"
              onClick={handleNewUser}
            >
              Novo
            </button>
          </div>
        </div>
      ) : (
        <div id="modalNew" className="modal">
          <div className="modal-title valign-wrapper">
            <h5>Novo Usuário</h5>
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

            <div className="input-field col s6 form-group">
              <input
                id="name"
                name="name"
                type="text"
                className="validate form-control"
                value={newUser.name}
                onChange={handleInputChange}
                autoFocus
              />
              <label htmlFor="name">Nome</label>
            </div>
            <div className="input-field col s6 form-group">
              <input
                id="password"
                name="password"
                type="password"
                className="validate form-control"
                value={newUser.password}
                onChange={handleInputChange}
                autoFocus
              />
              <label htmlFor="password">Senha</label>
            </div>

            <div className="input-field col s6 form-group">
              <input
                id="address"
                name="address"
                type="text"
                className="validate form-control"
                value={newUser.address}
                onChange={handleInputChange}
                autoFocus
              />
              <label htmlFor="address">Endereço</label>
            </div>
            <div className="input-field col s6 form-group">
              <input
                id="email"
                name="email"
                type="text"
                placeholder='endereço@dominio.com'
                className="validate form-control"
                value={newUser.email}
                onChange={handleInputChange}
                autoFocus
              />
              <label htmlFor="email">E-mail</label>
            </div>

            <div className="row valign-wrapper noMargin">
              <div className="input-field col s6 form-group">
                <input
                  id="contact"
                  name="contact"
                  type="text"
                  placeholder='(xx) xxxxx-xxxx'
                  className="validate form-control"
                  value={newUser.contact}
                  onChange={handleInputChange}
                  autoFocus
                />
                <label htmlFor="contact">Contato</label>
              </div>
              <div className="col s6 form-group">
                <input
                  name="birthDate"
                  type="date"
                  className="form-control"
                  min={minValue}
                  value={newUser.birthDate}
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
              Salvar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
