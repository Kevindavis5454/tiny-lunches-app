import config from "../config";

const updatePantryItem = {
  quantity(url, updateFields) {
    console.log(updateFields, "update fields");
    fetch(url, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem(config.TOKEN_KEY)}`,
      },
      body: JSON.stringify(updateFields),
    })
      .then((res) => {
        if (!res.ok) return res.json().then((e) => Promise.reject(e));
        else {
          alert("The Quantity of your Item has been updated");
        }
      })
      .catch((error) => {
        console.error({ error });
      });
  },
};

export default updatePantryItem;
