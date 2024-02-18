import axios from "axios";

const rentCarsInstsnce = axios.create({
  baseURL: "https://65ccb94add519126b83f62f1.mockapi.io",
});

export const fetchAdvertsAll = async (page) => {
  const { data } = await rentCarsInstsnce.get(`/adverts`);
  return data;
};

export const fetchAdvertsById = async (id) => {
  const { data } = await rentCarsInstsnce.get(`/adverts/${id}`);
  return data;
};
