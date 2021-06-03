import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

interface QuestionProps {
  inDrawer: boolean
  children: React.ReactNode
}

const Question = ({ inDrawer, children }: QuestionProps) => (
  <QuestionWrapper inDrawer={inDrawer}>
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
  width: 100%;
  border-radius: 10px;
  border: ${(props) => (props.inDrawer ? '2px solid #e0e0e0' : '0px')};
  box-shadow: ${(props) => (props.inDrawer ? undefined : '0px 0px 10px #e3e3e3')};
`;

export default Question;
