import { createReducer } from "@reduxjs/toolkit";
import { addRadioOption } from "../features/radioOption/radioOptionReducer";



const orderReducer = createReducer( [], (builder) => {
  builder.addCase(addRadioOption, (state, action) => {
    console.log('I am here, this is the action', action);
    state.push(action.payload.id)
  })
})

export default orderReducer
