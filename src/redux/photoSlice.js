import { createSlice } from "@reduxjs/toolkit";
import { fetchPhotos } from "../api/api";

const photoSlice = createSlice({
  name: "photos",
  initialState: {
    list: [],
    loading: false,
    error: null,
    currentItem: null,
  },
  reducers: {
    setCurrentItem: (state, action) => {
      state.currentItem = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPhotos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPhotos.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchPhotos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setCurrentItem } = photoSlice.actions;
export default photoSlice.reducer;
