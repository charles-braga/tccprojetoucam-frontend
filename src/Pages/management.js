import React, { useState, useEffect } from 'react';
import DataService from '../services/DataService';
import M from 'materialize-css';

//Components
import PageDefault from '../components/PageDefault/index';
import ButtonUser from '../components/ButtonUser';
import ModalNewUser from '../components/modalNewUser';
import CardsUsers from '../components/info/cards';
import ModalUpdateUser from '../components/modalUpdateUser';

//css Modules
import '../components/components.modules.css';

export default function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState([]);
  const [dropdown, setDropdown] = useState('');
  const [statusModal, setStatusModal] = useState(false);
  const [removed, setRemoved] = useState();

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await DataService.getAllUsers();
      setUsers(data);
    };

    fetchUsers();
    M.AutoInit();
  }, [statusModal, removed, dropdown]);

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

  const handleAction = (action, user) => {
    const { _id } = user;
    if (action === 'delete') {
      DataService.deleteUser(_id)
        .then((response) => {
          setRemoved(_id);
        })
        .catch((e) => {
          // console.log(e);
        });
    } else {
      setDropdown('show');
      setUser(user);
    }
  };

  return (
    <PageDefault>
      <div className="container">
        <div className="row valign-wrapper">
          <div className="col s6  m3  noPadding">
            <ButtonUser onClick={showDropdown} />
            <ModalNewUser
              onChange={handleStatusModal}
              updateUsers={false}
              className={dropdown}
            />
            <ModalUpdateUser
              onChange={handleStatusModal}
              User={user}
              className={dropdown}
            />
          </div>
          <div className="col s6 m9 noPadding">
          </div>
        </div>
        <CardsUsers handleAction={handleAction} sendUsers={users} />
      </div>
    </PageDefault>
  );
}
