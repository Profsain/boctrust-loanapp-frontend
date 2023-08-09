import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//fetch contact record
const API_ENDPOINT = 'http://localhost:3030/api/contact/contacts';

// Thunk to fetch contact from the API
export const fetchContact = createAsyncThunk('contact/fetchContact', async () => {
    const response = await axios.get(API_ENDPOINT);
    console.log(response.data);
  return response.data;
});

// product slice
const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    contacts: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContact.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchContact.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.contacts = action.payload;
      })
      .addCase(fetchContact.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default contactSlice.reducer;
