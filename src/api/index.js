import axios from "axios";

export const getAreaData = async () => {
  const { data } = await axios.get("https://api.zippopotam.us/GB/bb10");
  // console.log(data.places);
  return data.places;
};
