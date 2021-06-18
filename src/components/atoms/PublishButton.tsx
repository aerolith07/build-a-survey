import { Button, useToast } from '@chakra-ui/react';
import React, { useState } from 'react';
import { publishSurvey } from '../../lib/api/surveyApi';
import { useAppDispatch, useAppSelector } from '../../state/store';
import { setPublished } from '../../state/surveyQuestions/published/publishedReducer';

const PublishButton = () => {
  const dispatch = useAppDispatch();
  const toast = useToast();
  const published = useAppSelector((state) => state.survey.published);
  const surveyId = useAppSelector((state) => state.app.surveyId);
  const [isLoading, setLoading] = useState(false);

  const handlePublish = async () => {
    setLoading(true);

    const data = await publishSurvey(!published, surveyId);

    if (data.status === true && data.published !== undefined) {
      dispatch(setPublished(data.published));
      toast({
        position: 'top',
        description: data.published ? 'Succesfully published survey' : 'Survey is unpublished',
        status: data.published ? 'success' : 'info',
      });
    } else {
      toast({ position: 'top', description: 'Unable to publish survey', status: 'error' });
    }

    setLoading(false);
  };

  const publishButtonText = published ? 'Unpublish' : 'Publish';

  return (
    <Button isLoading={isLoading} isDisabled={isLoading} onClick={handlePublish} size="sm" colorScheme="green" variant={published ? 'outline' : 'solid'}>{publishButtonText}</Button>
  );
};

export default PublishButton;
