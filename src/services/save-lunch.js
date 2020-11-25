import config from "../config";

const saveLunchList = {
  saveLunch(url, lunchList) {
    return fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem(config.TOKEN_KEY)}`,
      },
      body: JSON.stringify(lunchList),
    })
      .then((res) => {
        if (!res.ok) return res.json().then((e) => Promise.reject(e));
        else {
          alert("Your Lunch has been saved");
        }
      })
      .catch((error) => {
        console.error({ error });
      });
  },
  deleteLunch(url) {
    fetch(url, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem(config.TOKEN_KEY)}`,
      },
    })
      .then((res) => {
        if (!res.ok) return res.json().then((e) => Promise.reject(e));
        else {
          alert("Your Lunch has been deleted");
        }
      })
      .catch((error) => {
        console.error({ error });
      });
  },
};

export default saveLunchList;
