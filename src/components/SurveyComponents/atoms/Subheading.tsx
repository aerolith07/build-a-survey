import { Heading } from '@chakra-ui/react';
import React from 'react';
import EditableLabel from './EditableLabel';

type EditableSubheadingProps = {
  subheading: string,
  editable?: boolean,
  setSubheading(value: string): void
}

const EditableSubheading = ({ subheading, editable, setSubheading }: EditableSubheadingProps) => {
  const subheadingProps = {
    fontSize: 'sm',
    fontWeight: '300',
    w: '100%',
    m: '2px',
    color: '#505050',
  };

  if (editable) {
    return (
      <Heading {...subheadingProps}>
        <EditableLabel
          editable={editable}
          initialValue={subheading}
          save={(value) => setSubheading(value)}
        />
      </Heading>
    );
  }

  return (
    <Heading {...subheadingProps}>
      {subheading}
    </Heading>
  );
};

EditableSubheading.defaultProps = {
  editable: false,
};

export default EditableSubheading;
