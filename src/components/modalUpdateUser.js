import React, { useState, useEffect } from 'react';
import DataService from '../services/DataService.js';

export default function ModalUpdateUser({ onChange, User }) {
  console.log(User);
  const { _id } = User;

  const controlledDate = {
    minValue: '1940-01-01'
  };
  const [updateUser, setUpdateUser] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [noUpdate, setNoUpdate] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const handleDate = () => {
      const { yearMonthDay } = updateUser;
      const { minValue } = controlledDate;

      if (yearMonthDay < minValue) {
        setErrorMessage(
          `O Periodo aceito é entre 01-01-2019 e 31-12-2021 (inclusive)`
        );
        return;
      }
      setErrorMessage('');
    };

    handleDate();
  }, [controlledDate, updateUser]);

  /*const handleRadio = (event) => {
    const { name, value } = event.target;
    let type = '-';
    if (value === 'Receita') {
      type = '+';
    }
    setUpdateUser({ ...updateUser, [name]: type });
  };*/

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdateUser({ ...updateUser, [name]: value });
  };

  const handleSubmit = () => {
    if (updateUser.length !== 0) {
      DataService.updateUser(_id, updateUser)
        .then((response) => {
          // console.log('Atualizado com sucesso');
        })
        .catch((e) => {
          // console.log(e);
        });
      setSubmitted(true);
      setNoUpdate(false);
    } else {
      setNoUpdate(true);
    }
  };

  const handleCloseButton = () => {
    setUpdateUser([]);
    setSubmitted(false);
    setNoUpdate(false);
    onChange(submitted);
  };

  const handleUpdateUser = () => {
    setUpdateUser([]);
    setSubmitted(false);
    setNoUpdate(false);
  };

  const handleEmptyUpdate = () => {
    setUpdateUser([]);
    setNoUpdate(false);
  };

  const { minValue } = controlledDate;

  return (
    <div className="submit-form">
      {submitted || noUpdate ? (
        <div id="modalUpdate" className="modal open">
          <div className="modal-title valign-wrapper">
            <h5>Atualizar Usuário</h5>
            <button
              onClick={handleCloseButton}
              className="modal-close waves-effect waves-red btn-flat red"
            >
              X
            </button>
          </div>
          <div className="modal-content modal-success">
            {submitted && <h6>Usuário atualizado com sucesso!</h6>}
            {noUpdate && <h6>Não foi registrada nenhuma nova informação!</h6>}
          </div>
          <div className="modal-footer">
            {submitted && (
              <button
                className="waves-effect waves-green btn-flat teal white-text"
                onClick={handleUpdateUser}
              >
                Nova
              </button>
            )}
            {noUpdate && (
              <button
                className="modal-close waves-effect waves-green btn-flat red white-text"
                onClick={handleEmptyUpdate}
              >
                Sair
              </button>
            )}
          </div>
        </div>
      ) : (
        <div id="modalUpdate" className="modal">
          <div className="modal-title valign-wrapper">
            <h5>Atualizar Usuário</h5>
            <button
              onClick={handleCloseButton}
              className="modal-close waves-effect waves-red btn-flat red"
            >
              X
            </button>
          </div>
          <div className="modal-content">
            {/*type === '-' ? (
              <div className="tipoLancamento form-group">
                <label>
                  <input
                    name="type"
                    type="radio"
                    className="form-control"
                    value="Despesa"
                    onChange={handleRadio}
                    defaultChecked
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
              </div>
            ) : (
              <div className="tipoLancamento form-group">
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
                    defaultChecked
                  />
                  <span className="teal-text">Receita</span>
                </label>
              </div>
            )*/}

            <div className="input-field col s6">
              <input
                id="name_"
                name="name"
                type="text"
                placeholder={User.name}
                onChange={handleInputChange}
                autoFocus
              />
              <label
                style={{
                  transform: 'translateY(-14px) scaleY(0.9)',
                  fontSize: '1rem',
                  color: 'teal',
                }}
                htmlFor="name_"
              >
                Nome
              </label>
            </div>
            <div className="input-field col s6">
              <input
                id="password_"
                name="password"
                type="password"
                onChange={handleInputChange}
                autoFocus
              />
              <label
                style={{
                  transform: 'translateY(-14px) scaleY(0.9)',
                  fontSize: '1rem',
                  color: 'teal',
                }}
                htmlFor="password_"
              >
                Senha
              </label>
            </div>

            <div className="input-field col s6">
              <input
                id="address_"
                name="address"
                type="text"
                placeholder={User.address}
                onChange={handleInputChange}
                autoFocus
              />
              <label
                style={{
                  transform: 'translateY(-14px) scaleY(0.9)',
                  fontSize: '1rem',
                  color: 'teal',
                }}
                htmlFor="address_"
              >
                Endereço
              </label>
            </div>
            <div className="input-field col s6">
              <input
                id="email_"
                name="email"
                type="text"
                placeholder={User.email}
                onChange={handleInputChange}
                autoFocus
              />
              <label
                style={{
                  transform: 'translateY(-14px) scaleY(0.9)',
                  fontSize: '1rem',
                  color: 'teal',
                }}
                htmlFor="email_"
              >
                E-mail
              </label>
            </div>

            <div className="row valign-wrapper noMargin">
              <div className="input-field col s6">
                <input
                  id="contact_"
                  name="contact"
                  type="text"
                  placeholder={User.contact}
                  onChange={handleInputChange}
                  autoFocus
                />
                <label
                  style={{
                    transform: 'translateY(-14px) scaleY(0.9)',
                    fontSize: '1rem',
                    color: 'teal',
                  }}
                  htmlFor="contact_"
                >
                  Contato
                </label>
              </div>
              <div className="input-field col s6">
                <input
                  name="birthDate_"
                  type="date"
                  min={minValue}
                  value={User.birthDate}
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
              Atualizar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
