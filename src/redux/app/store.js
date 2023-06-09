import { configureStore } from '@reduxjs/toolkit';
import fetchJobs from '../reducers/fetchJobs';

// create a store
const store = configureStore({
    reducer: {
        // add reducers here
        fetchJobs,
    }
});

export default store;
