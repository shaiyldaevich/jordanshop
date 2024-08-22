import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basket: JSON.parse(localStorage.getItem("basket")) || [],
};
export const AddbasketSlice = createSlice({
  name: "ADD-BASKET",
  initialState,
  reducers: {
    addbasket(state, action) {
      localStorage.setItem(
        "basket",
        JSON.stringify([...state.basket, action.payload])
      );
      state.basket = [...state.basket, action.payload];
    },
    deletePro(state, action) {
      localStorage.setItem(
        "basket",
        JSON.stringify([
          ...state.basket.filter((el) => el.id !== action.payload),
        ])
      );
      state.basket = [
        ...state.basket.filter((el) => el.id !== action.payload),
      ];
    },
  },
});
export const { addbasket, deletePro } = AddbasketSlice.actions;
export default AddbasketSlice.reducer;
