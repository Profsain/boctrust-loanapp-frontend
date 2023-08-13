import { configureStore } from '@reduxjs/toolkit';
import fetchJobs from '../reducers/fetchJobs';
import userSlice from '../reducers/userSlice';
import blogReducer from '../reducers/blogReducer';
import productReducer from '../reducers/productReducer';
import wikiReducer from '../reducers/wikiReducer';
import contactFormReducer from '../reducers/contactFormReducer';
import branchReducer from '../reducers/branchReducer';
import accountReducer from '../reducers/accountReducer';

// create a store
const store = configureStore({
    reducer: {
        // add reducers here
        fetchJobs,
        blogReducer,
        productReducer,
        wikiReducer,
        contactFormReducer,
        branchReducer,
        accountReducer,
        user: userSlice,
    }
});

export default store;
