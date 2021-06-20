import { Heading } from '@chakra-ui/layout';
import React from 'react';

interface SurveyResultsProps {
  results: any[],
}

const SurveyResults = ({ results }: SurveyResultsProps) => (
  <>
    {results.map((question) => (
      <div key={question.id}>
        <Heading size="sm">{question.title}</Heading>
        {question.options.map((option) => (
          <div key={option.id}>
            {option.value}
            {' --'}
            {option.count}
          </div>
        ))}
      </div>
    ))}
  </>
);

export default SurveyResults;
