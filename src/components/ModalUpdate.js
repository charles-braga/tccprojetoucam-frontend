import React, { useState, useEffect } from 'react';
import TransactionDataService from '../services/DataService.js';

export default function ModalUpdate({ onChange, transaction }) {
  const { _id, type, description, category, value, yearMonthDay } = transaction;

  const controlledDate = {
    minValue: '2019-01-01'
  };
  const [updateTransaction, setUpdateTransaction] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [noUpdate, setNoUpdate] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const handleDate = () => {
      const { yearMonthDay } = updateTransaction;
      const { minValue, maxValue } = controlledDate;

      if (yearMonthDay < minValue || yearMonthDay > maxValue) {
        setErrorMessage(
          `O Periodo aceito é entre 01-01-2019 e 31-12-2021 (inclusive)`
        );
        return;
      }
      setErrorMessage('');
    };

    handleDate();
  }, [controlledDate, updateTransaction]);

  /*const handleRadio = (event) => {
    const { name, value } = event.target;
    let type = '-';
    if (value === 'Receita') {
      type = '+';
    }
    setUpdateTransaction({ ...updateTransaction, [name]: type });
  };*/

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdateTransaction({ ...updateTransaction, [name]: value });
  };

  const handleSubmit = () => {
    if (updateTransaction.length !== 0) {
      TransactionDataService.update(_id, updateTransaction)
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
    setUpdateTransaction([]);
    setSubmitted(false);
    setNoUpdate(false);
    onChange(submitted);
  };

  const handleUpdateTransaction = () => {
    setUpdateTransaction([]);
    setSubmitted(false);
    setNoUpdate(false);
  };

  const handleEmptyUpdate = () => {
    setUpdateTransaction([]);
    setNoUpdate(false);
  };

  const { minValue, maxValue } = controlledDate;

  return (
    <div className="submit-form">
      {submitted || noUpdate ? (
        <div id="modalUpdate" className="modal open">
          <div className="modal-title valign-wrapper">
            <h5>Atualizar Adoção</h5>
            <button
              onClick={handleCloseButton}
              className="modal-close waves-effect waves-red btn-flat red"
            >
              X
            </button>
          </div>
          <div className="modal-content modal-success">
            {submitted && <h6>Adoção atualizada com sucesso!</h6>}
            {noUpdate && <h6>Não foi registrada nenhuma nova informação!</h6>}
          </div>
          <div className="modal-footer">
            {submitted && (
              <button
                className="waves-effect waves-green btn-flat teal white-text"
                onClick={handleUpdateTransaction}
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
            <h5>Atualizar Adoção</h5>
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

            <div className="input-field">
              <input
                id="description_"
                name="description"
                type="text"
                placeholder={description}
                onChange={handleInputChange}
              />
              <label
                style={{
                  transform: 'translateY(-14px) scaleY(0.9)',
                  fontSize: '1rem',
                  color: 'teal',
                }}
                htmlFor="description_"
              >
                Nome
              </label>
            </div>
            <div className="input-field">
              <input
                id="category_"
                name="category"
                type="text"
                placeholder={category}
                onChange={handleInputChange}
              />
              <label
                style={{
                  transform: 'translateY(-14px) scaleY(0.9)',
                  fontSize: '1rem',
                  color: 'teal',
                }}
                htmlFor="category"
              >
                Nome do Cão
              </label>
            </div>
            <div className="row valign-wrapper noMargin">
              <div className="input-field col s6">
                <input
                  id="value"
                  name="raça"
                  type="text"
                  placeholder={value}
                  onChange={handleInputChange}
                />
                <label
                  style={{
                    transform: 'translateY(-14px) scaleY(0.9)',
                    fontSize: '1rem',
                    color: 'teal',
                  }}
                  htmlFor="value"
                >
                  Raça
                </label>
              </div>
              <div className="input-field col s6">
                <input
                  name="yearMonthDay"
                  type="date"
                  min={minValue}
                  placeholder={yearMonthDay}
                  onChange={handleInputChange}
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
