import { IWine } from 'models/wines';
import axios from './axios';

export const getWines = async (query = '') => {
  try {
    const { data } = await axios(`wines/${query}`);
    return data;
  } catch (error) {
    return [];
  }
};

export const createWines = async (payload: IWine) => {
  try {
    const { data } = await axios.post(`wines`, payload);
    return data;
  } catch (error) {
    return [];
  }
};
