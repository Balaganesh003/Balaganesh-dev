import { configureStore } from '@reduxjs/toolkit';

import projectSlice from './project-slice';
import uiSlice from './ui-slice';

const store = configureStore({
  reducer: {
    projects: projectSlice.reducer,
    ui: uiSlice.reducer,
  },
});

export default store;
