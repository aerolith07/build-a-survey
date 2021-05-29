import { createAction, createReducer, nanoid } from "@reduxjs/toolkit";

export const setTitle = createAction<{id: string, title: string}>('setTitle')
export const addOption = createAction<{id: string, option: string}>('addOption')
export const addRadioOption = createAction('addRadioOption', () => {
  return {payload: {id: nanoid()}}
})

type radioOptionType = {
  [id: string]: {
    title: string,
    subheading:string,
    options: Array<{value: string}>
  }
}

const initialState: radioOptionType = {}

export const radioOptions = createReducer(initialState, (builder) => {
  builder.addCase(setTitle, (state, {payload}) => {
    state[payload.id].title = payload.title
  })
  builder.addCase(addOption, (state, {payload}) => {
    state[payload.id].options.push({ value: payload.option})
  })
  builder.addCase(addRadioOption, (state, {payload}) => {
    console.log('payload', payload);
    // TODO extract to separate file?
    const newRadioOption = { title: 'new option?', subheading: 'optional description', options: [{value: 'True'},  {value:'False'}] }
    state[payload.id] = newRadioOption
  })
})

