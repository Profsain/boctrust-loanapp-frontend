import { configureStore } from '@reduxjs/toolkit';
import fetchJobs from '../reducers/fetchJobs';
import userSlice from '../reducers/userSlice';

// create a store
const store = configureStore({
    reducer: {
        // add reducers here
        fetchJobs,
        user: userSlice,
    }
});

export default store;
