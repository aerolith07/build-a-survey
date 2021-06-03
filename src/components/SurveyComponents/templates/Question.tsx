import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Question: FunctionComponent = ({ children }) => (
  <QuestionWrapper>
    {children}
  </QuestionWrapper>
);

Question.propTypes = {
  children: PropTypes.node,
};

Question.defaultProps = {
  children: undefined,
};

const QuestionWrapper = styled.div`
  padding:20px;
  background: white;
  width: 500px;
  border-radius: 10px;
  border:  2px dashed #b8b8dd;
`;

export default Question;
