import React from "react";

export default React.createContext({
  userSelections: [],
  handleAddToLunch: [],
  handleRemoveFromLunch: [],
  handleClearLunchList: [],
  handleCheckTheMasterCheckBox: [],
  handleCheckThePantryCheckBox: [],
  handleCheckTheAllCheckBox: [],
  masterCheckBoxStatus: [],
  pantryCheckBoxStatus: [],
  allCheckBoxStatus: [],
});
