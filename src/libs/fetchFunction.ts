import axios from 'axios';
import { commonInterface } from 'interfaces';

export const axiosPost = async <responseInterface>(
  url: string,
  sendForm: object,
  withFile?: boolean,
): Promise<commonInterface.axiosResponseInterface<responseInterface>> => {
  try {
    const result = await axios.post(
      `${process.env.REACT_APP_SERVER}:${process.env.REACT_APP_SERVER_PORT}/${url}`,
      sendForm,
      withFile ? { headers: { 'content-type': 'multipart/form-data' } } : {},
    );
    return result.data;
  } catch (error: any) {
    return error;
  }
};

export const axiosGet = async (url: string) => {
  try {
    const result = await axios.get(`${process.env.REACT_APP_SERVER}:${process.env.REACT_APP_SERVER_PORT}/${url}`);
    return result.data;
  } catch (error) {
    return error;
  }
};
