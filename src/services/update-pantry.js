import config from "../config";

const updatePantryItem = {
  quantity(url, updateFields) {
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
  pantryUpdate(url, itemSelection, patchFields) {
    const sorted = [];
    for (let i = 0; i < itemSelection.Categories.length; i++) {
      sorted.push([`category_${i + 1}`, itemSelection.Categories[i]]);
    }
    const sortedObjects = Object.assign(
      ...sorted.map(([k, v]) => ({ [k]: v }))
    );
    const mergedObject = {
      ...patchFields,
      ...sortedObjects,
    };
    return fetch(url, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem(config.TOKEN_KEY)}`,
      },
      body: JSON.stringify(mergedObject),
    })
      .then((res) => {
        if (!res.ok) return res.json().then((e) => Promise.reject(e));
        // else {
        //   alert("Your Item has been updated!");
        // }
      })
      .catch((error) => {
        console.error({ error });
      });
  },
};

export default updatePantryItem;
