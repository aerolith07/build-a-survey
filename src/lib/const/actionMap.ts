import { addQuestion as addCheckboxQuestion, removeQuestion as removeCheckboxQuestion } from '../../state/surveyQuestions/checkbox/checkboxAction';
import { addQuestion as addInputQuestion, removeQuestion as removeInputQuestion } from '../../state/surveyQuestions/input/inputActions';
import { addQuestion as addRadioQuestion, removeQuestion as removeRadioQuestion } from '../../state/surveyQuestions/radio/radioActions';
import Questions from './Questions';

export const getAddActionFor = (droppableId: string) => {
  switch (droppableId) {
    case Questions.radio:
      return addRadioQuestion;
    case Questions.checkboxes:
      return addCheckboxQuestion;
    case Questions.input:
      return addInputQuestion;
    default:
      console.warn(`no component found for id: ${droppableId}}`);
      return undefined;
  }
};

export const getRemoveActionFor = (droppableId: string) => {
  switch (droppableId) {
    case Questions.radio:
      return removeRadioQuestion;
    case Questions.checkboxes:
      return removeCheckboxQuestion;
    case Questions.input:
      return removeInputQuestion;
    default:
      console.warn(`no component found for id: ${droppableId}}`);
      return undefined;
  }
};
