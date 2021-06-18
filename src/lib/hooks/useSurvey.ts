import { useEffect, useState } from 'react';
import { setSurvey } from '../../state/appState/appReducers';
import { useAppDispatch } from '../../state/store';
import { initQuestion as initCheckboxes } from '../../state/surveyQuestions/checkbox/checkboxAction';
import { initQuestion as initInputs } from '../../state/surveyQuestions/input/inputActions';
import { initOrder } from '../../state/surveyQuestions/order/orderAction';
import { setPublished } from '../../state/surveyQuestions/published/publishedReducer';
import { initQuestion as initRadios } from '../../state/surveyQuestions/radio/radioActions';
import { initComponent as initSubheadings } from '../../state/surveyQuestions/subheading/subheadingAction';
import { initComponent as initTitles } from '../../state/surveyQuestions/title/titleAction';
import { getSurveyById } from '../api/surveyApi';

const setupSurvey = (questions, order, published, dispatch) => {
  dispatch(initOrder(order));
  if (questions.radio) { dispatch(initRadios(questions.radio)); }
  if (questions.checkboxes) { dispatch(initCheckboxes(questions.checkboxes)); }
  if (questions.input) { dispatch(initInputs(questions.input)); }
  if (questions.title) { dispatch(initTitles(questions.title)); }
  if (questions.subheading) { dispatch(initSubheadings(questions.subheading)); }
  setPublished(published);
};

const useSurvey = (surveyId: string) => {
  const [loading, setLoading] = useState(true);
  const [validID, setValidID] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getSurveyAsync = async () => {
      if (surveyId) {
        setLoading(true);
        const {
          questions, order, published, status,
        } = await getSurveyById(surveyId);

        setLoading(false);
        dispatch(setSurvey(surveyId));
        if (status && order && questions) {
          setValidID(true);
          setupSurvey(questions, order, published, dispatch);
        } else {
          setValidID(false);
        }
      }
    };

    getSurveyAsync();
  }, []);

  return { loading, validID };
};

export default useSurvey;
