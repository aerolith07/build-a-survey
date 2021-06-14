import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

interface QuestionProps {
  inDrawer: boolean
  editable: boolean,
  children: React.ReactNode
}

const Question = ({ inDrawer, editable, children }: QuestionProps) => (
  <QuestionWrapper inDrawer={inDrawer} editable={editable}>
    {children}
  </QuestionWrapper>
);

Question.propTypes = {
  inDrawer: PropTypes.bool,
};

Question.defaultProps = {
  inDrawer: false,
};

const QuestionWrapper = styled.div<QuestionProps>`
  padding:0.5rem;
  background: white;
  width: ${({ inDrawer }) => (inDrawer ? '200px' : '80%')};
  border-radius: 10px;
  border: ${({ inDrawer }) => (inDrawer ? '2px solid #e0e0e0' : '0px')};
  box-shadow: ${({ inDrawer, editable }) => ((inDrawer || !editable) ? undefined : '0px 0px 10px #e3e3e3')};
`;

export default Question;
