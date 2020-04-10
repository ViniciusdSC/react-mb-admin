import axios from 'axios';

const instance = () => axios.create({
  baseURL: process.env.REACT_APP_BASE_API,
  timeout: 5000,
});

const login = ({ email, password }) => instance().post('auth/login', { email, password });

const register = ({
  name, username, email, password,
}) => instance().post('auth/sign-up', {
  name, username, email, password,
});

export default instance;

export {
  instance,
  login,
  register,
};
