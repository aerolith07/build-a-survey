import { RadioGroup } from '@chakra-ui/react';
import React from 'react';
import { EditableRadioOptionProps } from '../atoms/RadioOption';
import renderEditableSubheading from '../atoms/Subheading';
import renderEditableTitle from '../atoms/Title';
import EditableRadioOptions from '../molecules/RadioOptions';

type RadioButonProps = {
  defaultTitle: string;
  defaultSubheading: string;
  defaultRadioOptions: EditableRadioOptionProps[]
}

const RadioButton = ({
  defaultTitle,
  defaultSubheading,
  defaultRadioOptions,
}: RadioButonProps) => (
  <RadioGroup>
    {defaultTitle && renderEditableTitle(defaultTitle)}
    {defaultSubheading && renderEditableSubheading(defaultSubheading)}
    {defaultRadioOptions && <EditableRadioOptions defaultRadioOptions={defaultRadioOptions} />}
  </RadioGroup>
);

export default RadioButton;
