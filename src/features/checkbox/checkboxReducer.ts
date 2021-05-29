import { createAction, createReducer, nanoid } from "@reduxjs/toolkit";

const setTitle = createAction<{id:string, title: string}>('setQTitle')
const addOption = createAction<{id: string, option: string}>('addBox')
const addRadioOption = createAction('addCheckboxOption', () => {
  console.log('doing this?');
  
  return {payload: {id: nanoid()}}
})

type radioOptionType = {
  [id: string]: {
    title: string,
    subheading:string,
    options: Array<{value: string}>
  }
}

const initialState: radioOptionType[] = []

export const checkboxes = createReducer(initialState, (builder) => {
  builder.addCase(setTitle, (state, {payload}) => {
    state[payload.id].title = payload.title
  })
  builder.addCase(addOption, (state, {payload}) => {
    state[payload.id].options.push(payload.option)
  })
  builder.addCase(addRadioOption, (state, {payload}) => {
    const newRadioOption = { title: 'new option?', subheading: 'optional description' }
    state[payload.id] = newRadioOption
  })
})
