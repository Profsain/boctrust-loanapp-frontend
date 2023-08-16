import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//fetch disbursement
const API_ENDPOINT = 'http://localhost:3030/api/disbursement/disbursements';

// Thunk to fetch disbursement from the API
export const fetchDisbursements = createAsyncThunk('disbursement/fetchDisbursements', async () => {
    const response = await axios.get(API_ENDPOINT);
  return response.data;
});

// disbursement slice
const disbursementSlice = createSlice({
  name: 'disbursement',
  initialState: {
    disbursements: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDisbursements.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDisbursements.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.disbursements = action.payload;
      })
      .addCase(fetchDisbursements.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default disbursementSlice.reducer;
