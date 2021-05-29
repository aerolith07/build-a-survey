import { createSlice } from '@reduxjs/toolkit';

export const radioOptionsSlice = createSlice({
  name: 'radioOptions',
  initialState: {
    title: 'default heading',
    subheading: '',
    options: [
      { value: 'True' }, { value: 'ASIYA IS A NOOB' },
    ],
  },
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setSubheading: (state, action) => {
      state.subheading = action.payload;
    },
    addOption: (state, action) => {
      state.options.push(action.payload)
    }
    // TODO add removeOption reducer
  },
});


export const ACTIONS = radioOptionsSlice.actions
export default radioOptionsSlice.reducer
