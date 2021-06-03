import { RadioGroup } from '@chakra-ui/react';
import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import Radio, { EditableRadioProps } from '../atoms/Radio';
import Subheading from '../atoms/Subheading';
import Title from '../atoms/Title';
import EditableInputOptions from '../molecules/ChoiceInputGroup';
import * as actions from '../../../state/surveyQuestions/radio/radioActions';

interface RadioButonProps extends PropsFromRedux {
  title: string;
  subheading: string;
  options: EditableRadioProps[];
  editable?: boolean;
  id: string;
}

const RadioQuestion = ({
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
}: RadioButonProps) => (
  <RadioGroup>
    {title && (
      <Title
        editable={editable}
        setTitle={(value) => setTitle({ id, value })}
        title={title}
      />
    )}
    {subheading && (
      <Subheading
        editable={editable}
        setSubheading={(value) => setSubheading({ id, value })}
        subheading={subheading}
      />
    )}
    {options && (
      <RadioGroup>
        <EditableInputOptions<EditableRadioProps>
          editable={editable}
          Input={Radio}
          options={options}
          addOption={() => addOption({ id })}
          removeOption={() => removeOption({ id })}
          setOption={(optionId, value) => setOption({ questionId: id, optionId, value })}
        />
      </RadioGroup>
    )}
  </RadioGroup>
);

RadioQuestion.defaultProps = {
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

export default connector(RadioQuestion);
