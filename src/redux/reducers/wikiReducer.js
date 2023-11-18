import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//fetch wiki
const API_ENDPOINT = 'http://localhost:3030/api/wiki/wikis';

// Thunk to fetch wiki from the API
export const fetchWikis = createAsyncThunk('wiki/fetchWikis', async () => {
    const response = await axios.get(API_ENDPOINT);
  return response.data;
});

// wiki slice
const wikiSlice = createSlice({
  name: 'wiki',
  initialState: {
    wikis: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWikis.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchWikis.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.wikis = action.payload;
      })
      .addCase(fetchWikis.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default wikiSlice.reducer;
