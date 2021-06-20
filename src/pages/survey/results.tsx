import { Spinner, Text } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import React, { useEffect, useState } from 'react';
import { DragDropContext, resetServerContext } from 'react-beautiful-dnd';
import SurveyResults from '../../components/organisms/SurveyResults';
import ScreenWithNav from '../../components/templates/ScreenWithNav';
import { getResults } from '../../lib/api/answerApi';
import { getSurveyById } from '../../lib/api/surveyApi';
import useDrag from '../../lib/hooks/useDrag';
import useExitPrompt from '../../lib/hooks/useExitPrompts';
import { setSurvey } from '../../state/appState/appReducers';
import { useAppDispatch } from '../../state/store';
import { resetAnswers } from '../../state/surveyAnswers/answersReducer';
import { resetSurvey } from '../../state/surveyQuestions/surveyReducer';

const useSurveyResults = (surveyId: string) => {
  const [loading, setLoading] = useState(true);
  const [validID, setValidID] = useState(false);
  const [surveyTitle, setTitle] = useState('');
  const [response, setResponse] = useState();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getSurveyAsync = async () => {
      if (surveyId) {
        setLoading(true);
        const response = await getResults(surveyId);
        setResponse(response);
        setLoading(false);
        dispatch(setSurvey(surveyId));
        setTitle(response.title);
        if (response) {
          setValidID(true);
          dispatch(resetAnswers());
          dispatch(resetSurvey());
        } else {
          setValidID(false);
        }
      } else {
        setLoading(false);
      }
    };

    getSurveyAsync();
  }, []);

  return {
    loading, validID, surveyTitle, response,
  };
};

const edit = ({ surveyId }) => {
  useExitPrompt(true);
  const dragHandler = useDrag();
  const {
    loading, validID, surveyTitle, response,
  } = useSurveyResults(surveyId);

  const renderMainBody = () => {
    if (loading) { return <Spinner />; }
    if (!validID) { return <Text>Invalid ID</Text>; }
    return <SurveyResults results={response.survey.questions} />;
  };

  return (
    <DragDropContext onDragEnd={dragHandler}>
      <ScreenWithNav showSettings={false} surveyTitle={surveyTitle}>
        {renderMainBody()}
      </ScreenWithNav>
    </DragDropContext>
  );
};

export default edit;

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log('context', context);
  // issue with react-beautiful-dnd not working when SSR refreshes
  // https://github.com/atlassian/react-beautiful-dnd/issues/1854
  resetServerContext();
  return { props: { surveyId: context.query.id || null } };
};
