import React, { useState, useEffect } from 'react';
import DataService from './services/DataService';
import M from 'materialize-css';
//import { PERIODS } from '../src/helpers/periodo';

//Components
//import PainelInfo from './components/info/PainelInfo';
//import Filtro from './components/Filtro/Filtro';
//import Button from './components/Button';
//import ModalNew from './components/ModalNew';
//import ModalUpdate from './components/ModalUpdate';
//import Lancamentos from './components/info/Lancamentos';
import PageDefault from './components/PageDefault/index';
import CardsDogs from './components/info/cardsDogs';
import ModalNewAdoption from './components/modalNewAdoption';

//css Modules
import './components/components.modules.css';

export default function App() {
  //const [searchByDescription, setSearchBydescription] = useState('');
  //const [currentPeriod, setCurrentPeriod] = useState(PERIODS[0]);
  //const [removed, setRemoved] = useState();
  const [dogs, setDogs] = useState([]);
  const [dog, setDog] = useState([]);
  const [dropdown, setDropdown] = useState('show');
  const [statusModal, setStatusModal] = useState(false);

  useEffect(() => {
    const fetchDogs = async () => {
      const { data } = await DataService.getAllDogs();
      setDogs(data);
    };

    fetchDogs();
    M.AutoInit();
  }, [statusModal, dropdown]);


  //console.log(dogs);
  {/*const handlePeriodSelect = (event) => {
    setCurrentPeriod(event.target.value);
  };*/}

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

  const handleActionApp = (action, dog) => {
    const { _id } = dog;
    console.log(action);
    if (action === 'delete') {
      DataService.remove(_id)
        .then((response) => {
          //setRemoved(_id);
        })
        .catch((e) => {
          // console.log(e);
        });
    } else {
      setDropdown('show');
      setDog(dog);
    }
  };

  return (
    <PageDefault>
      <div className="container">
        {/*<div className="row">
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
        </div>*/}
        {/*<PainelInfo transactions={transactions} />*/}
        <div className="row valign-wrapper">
          <div className="col s6  m3  noPadding">
            <ModalNewAdoption
              onChange={handleStatusModal}
              dog={dog}
              className={dropdown}
            />
          </div>
        </div>
        {/*<ModalNewAdoption onChange={handleStatusModal} dog={dog} className={dropdown} />*/}
        <CardsDogs handleActionApp={handleActionApp} sendDogs={dogs} />
      </div>
    </PageDefault >
  );
}
