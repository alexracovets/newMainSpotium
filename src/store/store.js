import { configureStore } from '@reduxjs/toolkit';

import stateIndustriesReducer from './reducers/stateIndustries';

const store = configureStore({
    reducer: {
        stateIndustries: stateIndustriesReducer
    },
});

export default store;