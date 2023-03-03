import { createSlice } from '@reduxjs/toolkit';
import totalProjects from '../AllProjectsData';

const initialProjectState = {
  projects: totalProjects,
  selectedProject: [],
  isLoading: false,
  error: null,
};

const projectSlice = createSlice({
  name: 'projects',
  initialState: initialProjectState,
  reducers: {
    fetchProjects(state, action) {
      state.isLoading = true;
      state.error = null;
    },
    fetchProjectsSuccess(state, action) {
      state.isLoading = false;
      state.projects = action.payload;
    },
    fetchProjectsFailed(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    addProject(state, action) {
      state.projects.push(action.payload);
    },
  },
});

export const projectActions = projectSlice.actions;

export default projectSlice;
