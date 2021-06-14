import { Button, Tooltip, useToast } from '@chakra-ui/react';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { createSurvey, updateSurvey } from '../../lib/api/surveyApi';
import { setSurvey } from '../../state/appState/appReducers';
import { useAppDispatch, useAppSelector } from '../../state/store';

const useFromNow = (initTime: string, interval = 5000) => {
  const getTimeFromNow = (fromNow: string) => moment(new Date(fromNow)).fromNow();

  const [rawTime, setRawTime] = useState(initTime);
  const [fromNow, setTime] = useState(getTimeFromNow(initTime));

  useEffect(() => {
    setTime(getTimeFromNow(rawTime));
    const timer = setInterval(() => setTime(getTimeFromNow(rawTime)), interval);
    return () => clearInterval(timer);
  }, [rawTime]);

  return { fromNow, setRawTime };
};

const useSaveSurvey = () => {
  const dispatch = useAppDispatch();
  const survey = useAppSelector((state) => state.survey);
  const surveyId = useAppSelector((state) => state.app.surveyId);
  const toast = useToast();
  const [isLoading, setLoading] = useState(false);
  const { fromNow, setRawTime } = useFromNow('');

  const handleSave = async () => {
    setLoading(true);

    const response = await (async () => {
      if (!surveyId) {
        const res = await createSurvey(survey);
        if (res.status) {
          dispatch(setSurvey(res._id));
        }
        return res;
      }
      return updateSurvey(survey, surveyId);
    })();

    console.log('asdadasda', response);

    if (response.status === true) {
      toast({
        position: 'top',
        title: 'Saved Survey',
        status: 'success',
        isClosable: true,
      });
      setRawTime(response.updatedAt);
    } else {
      toast({
        position: 'top',
        title: 'Unable to save',
        description: response.message === 'no title' ? 'Survey must contain a title component' : null,
        status: 'error',
        isClosable: true,
      });
    }

    setLoading(false);
  };

  const lastSaved = fromNow === 'Invalid date' ? '' : fromNow;

  return { isLoading, lastSaved, handleSave };
};

const SaveButton = () => {
  const { isLoading, lastSaved, handleSave } = useSaveSurvey();
  return (
    <Tooltip label={lastSaved ? `Last saved - ${lastSaved}` : 'Not saved recently'}>
      <Button isLoading={isLoading} onClick={() => handleSave()} colorScheme="green" size="sm">Save</Button>
    </Tooltip>
  );
};

export default SaveButton;
