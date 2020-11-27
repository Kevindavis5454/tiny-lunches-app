import React from "react";

export default React.createContext({
  userSelections: [],
  handleAddToLunch: [],
  handleRemoveFromLunch: [],
  handleClearLunchList: [],
  handleCheckTheMasterCheckBox: [],
  handleCheckThePantryCheckBox: [],
  masterCheckBoxStatus: [],
  pantryCheckBoxStatus: [],
  shoppingList: [],
  handleAddToShoppingList: [],
  handleRemoveFromShoppingList: [],
  handleClearShoppingList: [],
  reRenderMasterLists: [],
  masterListFiltered: [],
  masterListFull: [],
  handleFilterMasterListFiltered: [],
});
