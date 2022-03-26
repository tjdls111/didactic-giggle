import axios, { AxiosError, AxiosRequestConfig } from "axios";

const BASE_URL = `http://localhost:8000`;

export const apiGetInvestItems = async () => {
  try {
    return await axios.get(`${BASE_URL}/investGoods/`);
  } catch (e) {
    throw new Error("server Error");
  }
};

export const apiGetNow = async () => {
  try {
    return await axios.get(`${BASE_URL}/now/`);
  } catch (e) {
    throw new Error("server Error");
  }
};

export const apiGetRecommandation = async () => {
  try {
    return await axios.get(`${BASE_URL}/recommnend/`);
  } catch (e) {
    throw new Error("server Error");
  }
};

export const apiGetPopular = async () => {
  try {
    return await axios.get(`${BASE_URL}/popular/`);
  } catch (e) {
    throw new Error("server Error");
  }
};

export const apiGetNFT = async () => {
  try {
    return await axios.get(`${BASE_URL}/nft/`);
  } catch (e) {
    throw new Error("server Error");
  }
};
