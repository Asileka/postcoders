import axios from "axios";

export const getAreaData = async (postcode) => {
  const { data } = await axios.get(`https://api.zippopotam.us/GB/${postcode}`);
  // console.log(data.places);
  return data;
};
