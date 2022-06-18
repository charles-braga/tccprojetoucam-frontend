import React, { useState, useEffect } from 'react';
import DataService from '../services/DataService';
import M from 'materialize-css';
import { PERIODS } from '../helpers/periodo';

//Components
import PageDefault from '../components/PageDefault/index';
import PainelInfo from '../components/info/PainelInfo';
//import Filtro from '../components/Filtro/Filtro';
import Button from '../components/Button';
import ModalNew from '../components/ModalNew';
import ModalUpdate from '../components/ModalUpdate';
import Lancamentos from '../components/info/Lancamentos';

//css Modules
import '../components/components.modules.css';

export default function App() {
  //  const [searchByDescription, setSearchBydescription] = useState('');
  const [currentPeriod, setCurrentPeriod] = useState(PERIODS[0]);
  const [transactions, setTransactions] = useState([]);
  const [adoption, setAdoption] = useState([]);
  const [dropdown, setDropdown] = useState('');
  const [statusModal, setStatusModal] = useState(false);
  const [removed, setRemoved] = useState();

  useEffect(() => {
    const fetchAdoptions = async () => {
      const { data } = await DataService.getAll(
        currentPeriod,
      );
      setTransactions(data);
    };

    fetchAdoptions();
    M.AutoInit();
  }, [currentPeriod, statusModal]);

  const handlePeriodSelect = (event) => {
    setCurrentPeriod(event.target.value);
  };

  const showDropdown = () => {
    setDropdown('show');
    document.addEventListener('click', closeDropdown);
  };

  const closeDropdown = () => {
    setDropdown('');
    document.removeEventListener('click', closeDropdown);
  };

  /*const handleInputDescription = (newText) => {
    setSearchBydescription(newText);
  };*/

  const handleStatusModal = (status) => {
    if (status === true && statusModal === true) {
      setStatusModal(false);
    } else {
      setStatusModal(true);
    }
  };

  const handleAction = (action, adoption) => {
    const { _id } = adoption;
    if (action === 'delete') {
      DataService.remove(_id)
        .then((response) => {
          setRemoved(_id);
        })
        .catch((e) => {
          // console.log(e);
        });
    } else {
      setDropdown('show');
      setAdoption(adoption);
    }
  };

  return (
    <PageDefault>
      <div className="container">
        <div className="row">
          <div className={`col s4 offset-s4`}>
            <select valor={currentPeriod} onChange={handlePeriodSelect}>
              {PERIODS.map((period) => {
                return (
                  <option key={period} value={period}>
                    {period}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <PainelInfo transactions={transactions} />
        <div className="row valign-wrapper">
          <div className="col s6  m3  noPadding">
            {/*<Button onClick={showDropdown} />*/}
            {/*<ModalNew
              onChange={handleStatusModal}
              updateAdoptions={false}
              className={dropdown}
            />*/}
            <ModalUpdate
              onChange={handleStatusModal}
              transaction={adoption}
              className={dropdown}
            />
          </div>
          <div className="col s6 m9 noPadding">
            {/*<Filtro onChange={handleInputDescription} />*/}
          </div>
        </div>
        <Lancamentos handleAction={handleAction} transactions={transactions} />
      </div>
    </PageDefault>
  );
}
