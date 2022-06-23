import React, { useState, useEffect } from 'react';
import DataService from './services/DataService';
import M from 'materialize-css';

//Components
import PageDefault from './components/PageDefault/index';
import CardsDogs from './components/info/cardsDogs';
import ModalNewAdoption from './components/modalNewAdoption';

//css Modules
import './components/components.modules.css';

export default function App() {
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

  const showDropdown = () => {
    setDropdown('show');
    document.addEventListener('click', closeDropdown);
  };

  const closeDropdown = () => {
    setDropdown('');
    document.removeEventListener('click', closeDropdown);
  };

  const handleStatusModal = (status) => {
    if (status === true && statusModal === true) {
      setStatusModal(false);
    } else {
      setStatusModal(true);
    }
  };

  const handleActionApp = (action, dog) => {
    const { _id } = dog;
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
        <div className="row valign-wrapper">
          <div className="col s6  m3  noPadding">
            <ModalNewAdoption
              onChange={handleStatusModal}
              dog={dog}
              className={dropdown}
            />
          </div>
        </div>
        <CardsDogs handleActionApp={handleActionApp} sendDogs={dogs} />
      </div>
    </PageDefault >
  );
}
