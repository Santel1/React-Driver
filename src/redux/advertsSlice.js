import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAdvertsAll, fetchAdvertsById } from "../services/api";

export const requestAdverts = createAsyncThunk(
  "adverts/get",
  async (page, thunkApi) => {
    try {
      const advertsData = await fetchAdvertsAll(page);
      return advertsData;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const requestAdvertsById = createAsyncThunk(
  "adverts/getById",
  async (advertId, thunkApi) => {
    try {
      const advert = await fetchAdvertsById(advertId);
      return advert;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const INITIAL_STATE = {
  advertsData: [],
  isLoading: false,
  error: null,
  favorites: [],
  filter: "",
  carsModel: [
    "Buick",
    "Bugatti",
    "Volvo",
    "HUMMER",
    "Subaru",
    "Mitsubishi",
    "Nissan",
    "Lincoln",
    "GMC",
    "Hyundai",
    "MINI",
    "Bentley",
    "Mercedes-Benz",
    "Aston Martin",
    "Pontiac",
    "Lamborghini",
    "Audi",
    "BMW",
    "Chevrolet",
    "Chrysler",
    "Kia",
    "Land",
    "Renault",
    "Volkswagen",
    "Toyota",
    "Ford",
  ],
};

const advertsSlice = createSlice({
  name: "adverts",
  initialState: INITIAL_STATE,
  reducers: {
    addToFavorites(state, action) {
      state.favorites.push(action.payload);
    },
    deleteFavorite(state, action) {
      state.favorites = state.favorites.filter(
        (favorite) => favorite.id !== action.payload
      );
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(requestAdverts.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(requestAdverts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.advertsData = action.payload;
      })
      .addCase(requestAdverts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const { setFilter, addToFavorites } = advertsSlice.actions;

export const { addFavorite, deleteFavorite } = advertsSlice.actions;

export const advertsReducer = advertsSlice.reducer;
