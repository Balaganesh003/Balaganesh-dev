import { createSlice } from '@reduxjs/toolkit';

const initialProjectState = {
  projects: [],
  selectedProject: [],
  selectedCategory: 'All',
  isLoading: true,
  error: null,
};

const projectSlice = createSlice({
  name: 'projects',
  initialState: initialProjectState,
  reducers: {
    setProjects(state, action) {
      state.projects = action.payload;
    },

    addProject(state, action) {
      state.projects.push(action.payload);
    },

    setCategory(state, action) {
      state.selectedCategory = action.payload;
    },

    setLoadingStatus(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const projectActions = projectSlice.actions;

export default projectSlice;
