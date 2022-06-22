import axios from 'axios';

// const baseURL = 'https://tccucam.herokuapp.com/api';
const baseURL = 'http://localhost:3500/api';

//Inicio das funções de manipulação das adoções ************
const getAll = (currentPeriod) => {
  return axios.get(
    `${baseURL}/adoption?period=${currentPeriod}`
  );
};

const newAdoption = (data) => {
  console.log(data);
  return axios.post(
    `${baseURL}/adoption`, data
  );
};
//Fim das funções de manipulação das adoções ************


const insertTransaction = (data) => {
  return axios.post(baseURL, data);
};

const update = async (_id, data) => {
  const response = await axios.patch(`${baseURL}/${_id}`, data);
  return response.data;
};

const remove = (_id) => {
  return axios.delete(`${baseURL}/${_id}`);
};

//Inicio das funções de manipulação dos cães ************
const getAllDogs = () => {
  return axios.get(
    `${baseURL}/management/animal`
  );
};
//Fim das funções de manipulação dos cães ************

//Inicio das funções de persistência de usuários ************
const newUser = (data) => {
  return axios.post(
    `${baseURL}/management/user/`, data
  );
};

const getAllUsers = () => {
  return axios.get(
    `${baseURL}/management/user/`
  );
};

const updateUser = async (_id, data) => {
  const response = await axios.patch(`${baseURL}/management/user/${_id}`, data);
  return response.data;
};

const deleteUser = (_id) => {
  return axios.delete(`${baseURL}/management/user/${_id}`);
};
//Fim das funções de persistência de usuários ************

export default { getAll, getAllDogs, getAllUsers, newAdoption, newUser, insertTransaction, update, updateUser, remove, deleteUser };
