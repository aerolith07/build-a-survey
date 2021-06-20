import { useEffect, useState } from 'react';
import { setSurvey } from '../../state/appState/appReducers';
import { useAppDispatch } from '../../state/store';
import { initAnswers, resetAnswers } from '../../state/surveyAnswers/answersReducer';
import { initQuestion as initCheckboxes } from '../../state/surveyQuestions/checkbox/checkboxAction';
import { initQuestion as initInputs } from '../../state/surveyQuestions/input/inputActions';
import { initOrder } from '../../state/surveyQuestions/order/orderAction';
import { setPublished } from '../../state/surveyQuestions/published/publishedReducer';
import { initQuestion as initRadios } from '../../state/surveyQuestions/radio/radioActions';
import { initComponent as initSubheadings } from '../../state/surveyQuestions/subheading/subheadingAction';
import { resetSurvey } from '../../state/surveyQuestions/surveyReducer';
import { initComponent as initTitles } from '../../state/surveyQuestions/title/titleAction';
import { getSurveyById } from '../api/surveyApi';
import Questions, { QuestionsWithOptions } from '../const/Questions';

const setupSurvey = (questions, order, published, dispatch) => {
  dispatch(initOrder(order));
  if (questions.radio) { dispatch(initRadios(questions.radio)); }
  if (questions.checkboxes) { dispatch(initCheckboxes(questions.checkboxes)); }
  if (questions.input) { dispatch(initInputs(questions.input)); }
  if (questions.title) { dispatch(initTitles(questions.title)); }
  if (questions.subheading) { dispatch(initSubheadings(questions.subheading)); }
  setPublished(published);
};

const setupAnswers = (questions, order, dispatch) => {
  const { radio, input, checkboxes } = questions;
  const questionsWithOptions = { radio, input, checkboxes };
  const orderWithOptions = order.filter((question: any) => QuestionsWithOptions.includes(
    Questions[question.type],
  ));

  const answers = orderWithOptions.map(({ type, id }) => {
    const question = questionsWithOptions[type][id];
    if (!question) { return null; }

    return ({
      id,
      title: question.title,
      options: question.options.map((option: { id: any; }) => ({
        id: option.id,
        value: type === Questions.input ? '' : false,
      })),
    });
  });

  dispatch(initAnswers(answers));
};

const useSurvey = (surveyId: string) => {
  const [loading, setLoading] = useState(true);
  const [validID, setValidID] = useState(false);
  const [surveyTitle, setTitle] = useState('');
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getSurveyAsync = async () => {
      if (surveyId) {
        setLoading(true);
        const {
          questions, order, published, status, title,
        } = await getSurveyById(surveyId);

        setLoading(false);
        dispatch(setSurvey(surveyId));
        setTitle(title);
        if (status && order && questions) {
          setValidID(true);
          dispatch(resetAnswers());
          dispatch(resetSurvey());
          setupSurvey(questions, order, published, dispatch);
          setupAnswers(questions, order, dispatch);
        } else {
          setValidID(false);
        }
      } else {
        setLoading(false);
      }
    };

    getSurveyAsync();
  }, []);

  return { loading, validID, surveyTitle };
};

export default useSurvey;
