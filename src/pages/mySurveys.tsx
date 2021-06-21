import {
  Button, Center, Heading, Spinner,
} from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
import { resetServerContext } from 'react-beautiful-dnd';
import styled from 'styled-components';
import SurveyEntry from '../components/atoms/SurveyEntry';
import ScreenWithNav from '../components/templates/ScreenWithNav';
import { getSurveyByUser } from '../lib/api/surveyApi';

const mySurveys = () => {
  const router = useRouter();
  const [surveyList, setSurveyList] = useState<any[]>(undefined);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const getSurveysAsync = async () => {
      setLoading(true);
      const response = await getSurveyByUser();
      if (!response.status) { throw new Error(response.error); }
      setSurveyList(response.survey);
      setLoading(false);
    };

    getSurveysAsync();
  }, []);

  const handleCreateNew = () => {
    router.push('/survey/edit/');
  };

  return (
    <ScreenWithNav showSettings={false}>
      <MainBody>
        <Heading p="1rem">Surveys</Heading>
        <SurveyListWrapper>
          {!isLoading ? surveyList && surveyList.map((surveyParams) => (
            <SurveyEntry
              key={surveyParams._id}
              surveyParams={surveyParams}
            />
          )) : (
            <Center height="100%">
              <Spinner />
            </Center>
          )}
        </SurveyListWrapper>
        <Button m="2rem" p="1rem" colorScheme="green" onClick={handleCreateNew}>Create New</Button>
      </MainBody>
    </ScreenWithNav>
  );
};

const MainBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* margin: auto; */
  height: calc(100vh - 4.5rem);
  /* background: linear-gradient(40deg, #2f2495 0%, rgba(23,150,240,1) 100%); */
`;

const SurveyListWrapper = styled.div`
  align-self: center;
  background: white;
  width: 90%;
  height: 100%;
  /* border: 1px solid #97d4ff4e; */
  border-radius: 10px;
  overflow-x: auto;
`;

export default mySurveys;

export const getServerSideProps: GetServerSideProps = async () => {
  // issue with react-beautiful-dnd not working when SSR refreshes
  // https://github.com/atlassian/react-beautiful-dnd/issues/1854
  resetServerContext();
  return { props: {} };
};
