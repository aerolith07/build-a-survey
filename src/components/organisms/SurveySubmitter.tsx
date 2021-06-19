import { Button } from '@chakra-ui/react';
import React from 'react';
import styled from 'styled-components';
import { submitAnswer } from '../../lib/api/answerApi';
import Components from '../../lib/const/componentMap';
import { useAppSelector } from '../../state/store';
import Question from '../SurveyComponents/templates/Question';

const SurveySubmitter = () => {
  const surveyId = useAppSelector((state) => state.app.surveyId);
  const { questions, order } = useAppSelector((state) => state.survey);
  const answers = useAppSelector((state) => state.answers);
  // useAnswerStore();

  console.log('rerender??');

  const handleSubmit = async () => {
    await submitAnswer(surveyId, answers);
  };

  return (
    <MainBody>
      {order.map(({ type, id }) => {
        const questionProps: any = questions[type][id];
        const QuestionComponent = Components[type];
        return (
          <Question key={id} editable={false}>
            <QuestionComponent
              editable={false}
              id={id}
              {...questionProps}
            />
          </Question>
        );
      })}
      <Button colorScheme="green" mt="30px" onClick={handleSubmit}>Submit</Button>
    </MainBody>
  );
};

const MainBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 6rem);
`;

export default SurveySubmitter;
