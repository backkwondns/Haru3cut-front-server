import axios from 'axios';

export const axiosPost = async (sendForm: any) => {
  const result = await axios.post('http://3.36.88.174:8000/register', sendForm);
  return result;
};
