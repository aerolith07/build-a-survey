import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import styled from 'styled-components';
import Input, { EditableInputProps } from '../atoms/Input';
import EditableSubheading from '../atoms/Subheading';
import EditableTitle from '../atoms/Title';
import EditableInputOptions from '../molecules/ChoiceInputGroup';
import * as actions from '../../../state/surveyQuestions/input/inputActions';

interface InputQuestionProps extends PropsFromRedux {
  title: string,
  subheading: string,
  options: EditableInputProps[],
  editable?: boolean,
  id: string
}

const InputQuestion = ({
  setTitle,
  setSubheading,
  addOption,
  removeOption,
  setOption,
  id,
  editable,
  title,
  subheading,
  options,
}: InputQuestionProps) => (
  <InputQuestionWrapper>
    { title && (
      <EditableTitle
        editable={editable}
        setTitle={(value) => setTitle({ id, value })}
        title={title}
      />
    )}
    { subheading && (
      <EditableSubheading
        editable={editable}
        setSubheading={(value) => setSubheading({ id, value })}
        subheading={subheading}
      />
    )}
    { options && (
      <EditableInputOptions<EditableInputProps>
        editable={editable}
        Input={Input}
        options={options}
        addOption={() => addOption({ id })}
        removeOption={() => removeOption({ id })}
        setOption={(optionId, value) => setOption({ questionId: id, optionId, value })}
      />
    )}
  </InputQuestionWrapper>
);

const InputQuestionWrapper = styled.div`
  display: block;
`;

InputQuestion.defaultProps = {
  editable: false,
};

const mapDispatchToProps = {
  setTitle: actions.setTitle,
  setSubheading: actions.setSubheading,
  addOption: actions.addOption,
  removeOption: actions.removeOption,
  setOption: actions.setOption,
};

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(InputQuestion);
