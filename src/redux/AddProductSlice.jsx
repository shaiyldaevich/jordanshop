import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: JSON.parse(localStorage.getItem("product")) || [],
  man: [],
  woman: [],
  kid: [],
  sale: [],
  search: [],
};
export const AddProductSlice = createSlice({
  name: "ADD-PRODUCT",
  initialState,
  reducers: {
    addProduct(state, action) {
      localStorage.setItem(
        "product",
        JSON.stringify([...state.product, action.payload])
      );
      state.product = [...state.product, action.payload];
    },
    productSort(state, action) {
      if ("expensive" === action.payload) {
        state.product = state.product.sort((a, b) => b.price - a.price);
      } else if ("cheap" === action.payload) {
        state.product = state.product.sort((a, b) => a.price - b.price);
      } else {
        return state.product;
      }
    },
    categoryMan(state, action) {
      state.man = state.product.filter((el) => el.category === "mans");
    },
    categoryWoman(state, action) {
      state.woman = state.product.filter((el) => el.category === "womans");
    },
    categoryKid(state, action) {
      state.kid = state.product.filter((el) => el.category === "kids");
    },
    saleProduct(state, action) {
      state.sale = state.product
        .filter((el) => el.price > 800)
        .map((el) => {
          return {
            ...el,
            oldPrice: el.price,
            price: el.price - (el.price / 100) * 30,
          };
        });
    },
    searchProduct(state, action) {
      state.search = state.product.filter((el) => el.title === action.payload);
    },
  },
});
export const {
  addProduct,
  productSort,
  categoryMan,
  categoryWoman,
  categoryKid,
  saleProduct,
  searchProduct,
} = AddProductSlice.actions;
export default AddProductSlice.reducer;
