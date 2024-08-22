import { configureStore } from "@reduxjs/toolkit";
import AddProductSlice from "./AddProductSlice";
import AddbasketSlice from "./AddbasketSlice";
import DetailsSlice from "./DetailsSlice";

export const store = configureStore({
  reducer: {
    addProduct: AddProductSlice,
    addbasket: AddbasketSlice,
    details: DetailsSlice,
    // searchProduct:SearchSlice
  },
});
