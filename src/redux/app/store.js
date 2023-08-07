import { configureStore } from '@reduxjs/toolkit';
import fetchJobs from '../reducers/fetchJobs';
import userSlice from '../reducers/userSlice';
import blogReducer from '../reducers/blogReducer';
import productReducer from '../reducers/productReducer';

// create a store
const store = configureStore({
    reducer: {
        // add reducers here
        fetchJobs,
        blogReducer,
        productReducer,
        user: userSlice,
    }
});

export default store;
