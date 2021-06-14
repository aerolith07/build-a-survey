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
