import { CheckboxGroup } from '@chakra-ui/react';
import React from 'react';
import styled from 'styled-components';
import { connect, ConnectedProps } from 'react-redux';
import Checkbox, { EditableCheckboxProps } from '../atoms/Checkbox';
import Subheading from '../atoms/Subheading';
import Title from '../atoms/Title';
import EditableInputOptions from '../molecules/ChoiceInputGroup';
import * as actions from '../../../state/surveyQuestions/checkbox/checkboxAction';

interface CheckboxProps extends PropsFromRedux {
  title: string;
  subheading: string;
  options: EditableCheckboxProps[];
  editable?: boolean;
  id: string;
}

const CheckboxQuestion = ({
  id,
  setTitle,
  setSubheading,
  addOption,
  removeOption,
  setOption,
  title,
  subheading,
  options,
  editable,
}: CheckboxProps) => (
  <CheckboxGroupWrapper>
    <CheckboxGroup>
      {title && (
        <Title
          setTitle={(value) => setTitle({ id, value })}
          editable={editable}
          title={title}
        />
      )}
      {subheading && (
        <Subheading
          setSubheading={(value) => setSubheading({ id, value })}
          editable={editable}
          subheading={subheading}
        />
      )}
      {options && (
        <EditableInputOptions<EditableCheckboxProps>
          editable={editable}
          Input={Checkbox}
          options={options}
          addOption={() => addOption({ id })}
          removeOption={() => removeOption({ id })}
          setOption={(optionId, value) => setOption({ questionId: id, optionId, value })}
        />
      )}
    </CheckboxGroup>
  </CheckboxGroupWrapper>
);

const CheckboxGroupWrapper = styled.div`
  display: block;
`;

CheckboxQuestion.defaultProps = {
  editable: true,
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

export default connector(CheckboxQuestion);
