import axios from 'axios';

export const axiosPost = async (url: string, sendForm: object) => {
  try {
    const result = await axios.post(`http://3.36.88.174:8000/${url}`, sendForm);
    return result;
  } catch (error) {
    return error;
  }
};

export const axiosGet = async (url: string) => {
  try {
    const result = await axios.get(`http://3.36.88.174:8000/${url}`);
    return result.data;
  } catch (error) {
    return error;
  }
};
