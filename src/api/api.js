// src/api/api.js

import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPhotos = createAsyncThunk("photos/fetchPhotos", async () => {
  const res = await fetch("/data.json");
  if (!res.ok) {
    throw new Error("Failed to fetch photos");
  }
  return res.json();
});
