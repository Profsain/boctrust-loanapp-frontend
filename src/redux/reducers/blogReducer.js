import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// fetch blog posts
const API_ENDPOINT = 'http://localhost:3030/api/blog/posts';

// Thunk to fetch blog posts from the API
export const fetchBlogPosts = createAsyncThunk('blog/fetchPosts', async () => {
    const response = await axios.get(API_ENDPOINT);
  return response.data;
});

// Blog slice
const blogSlice = createSlice({
  name: 'blog',
  initialState: {
    posts: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBlogPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload;
      })
      .addCase(fetchBlogPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default blogSlice.reducer;
