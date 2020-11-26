import config from "../config";

const GetAllData = {
  getMasterData(url) {
    return fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem(config.TOKEN_KEY)}`,
      },
    }).then((res) => res.json());
  },
  getMasterPantryData(url) {
    return fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem(config.TOKEN_KEY)}`,
      },
    }).then((res2) => res2.json());
  },
};

export default GetAllData;
