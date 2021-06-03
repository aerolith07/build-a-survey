import * as inputActions from '../input/inputActions';
import * as radioActions from '../radio/radioActions';
import * as checkboxActions from '../checkbox/checkboxAction';
import Questions from '../../../lib/const/Questions';

function getActions(type: Questions) {
  switch (type) {
    case Questions.checkboxes:
      return checkboxActions;
    case Questions.input:
      return inputActions;
    case Questions.radio:
      return radioActions;
    default:
      throw new Error(`No actions for type ${type}`);
  }
}
export default getActions;

// const createActions = (type: string) => {
//   const setTitle = createAction<{id: string, value: string}>(`${type}/setTitle`);
//   const setSubheading = createAction<{id: string, value: string}>(`${type}/setSubheading`);
//   const addOption = createAction(`${type}/addOption`, ({ id }) => (
//     { payload: { questionId: id, optionId: nanoid() } }
//   ));
//   const setOption = createAction(`${type}/setOption`, ({ questionId, optionId, value }) => (
//     { payload: { questionId, optionId, value } }
//   ));
//   const removeOption = createAction<{id: string}>(`${type}/removeOption`);
//   const addQuestion = createAction<{id: string}>(`${type}/addQuestion`);
//   const removeQuestion = createAction<{id: string}>(`${type}/removeQuestion`);

//   const actions = {
//     setTitle, setSubheading, addOption, setOption, removeOption, addQuestion, removeQuestion,
//   };

//   return actions;
// };

// export default createActions;
