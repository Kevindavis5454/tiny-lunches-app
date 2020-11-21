import config from "../config";

const addNewCustomItem = {
  toPantry(url, itemSelection) {
    const sorted = [];
    for (let i = 0; i < itemSelection.Categories.length; i++) {
      sorted.push([`category_${i + 1}`, itemSelection.Categories[i]]);
    }
    const sortedObjects = Object.assign(
      ...sorted.map(([k, v]) => ({ [k]: v }))
    );
    const newItem = {
      user_id: parseInt(localStorage.getItem("user_id")),
      item_name: itemSelection.Name,
      quantity: itemSelection.Quantity,
    };
    const mergedObject = {
      ...newItem,
      ...sortedObjects,
    };
    console.log(mergedObject, "merged fun");
    return fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem(config.TOKEN_KEY)}`,
      },
      body: JSON.stringify(mergedObject),
    })
      .then((res) => {
        if (!res.ok) return res.json().then((e) => Promise.reject(e));
        else {
          alert("Your Item has been added to your Pantry");
        }
      })
      .catch((error) => {
        console.error({ error });
      });
  },
};

export default addNewCustomItem;
