import axios from 'axios';

const baseURL = 'http://localhost:3500/api';

const getAll = (currentPeriod) => {
  return axios.get(
    `${baseURL}/adoption?period=${currentPeriod}`
  );
};

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

const getAllDogs = () => {
  return axios.get(
    `${baseURL}/management/animal`
  );
};

const newAdoption = (data) => {
  return axios.post(
    `${baseURL}/adoption`, data
  );
};

export default { getAll, getAllDogs, newAdoption, insertTransaction, update, remove };
