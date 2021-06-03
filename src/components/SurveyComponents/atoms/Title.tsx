import { Heading } from '@chakra-ui/react';
import React from 'react';
import EditableLabel from './EditableLabel';

type EditableTitleProps = {
  title: string,
  editable?: boolean,
  setTitle(value: string): void
}

const EditableTitle = ({
  title, editable, setTitle,
}: EditableTitleProps) => {
  const titleProps = {
    fontSize: 'xl',
    fontWeight: '600',
    w: '100%',
    m: '2px',
  };

  if (editable) {
    return (
      <Heading {...titleProps}>
        <EditableLabel
          editable={editable}
          initialValue={title}
          save={(value) => setTitle(value)}
        />
      </Heading>
    );
  }

  return (
    <Heading {...titleProps} padding="0px 3px 3px">
      {title}
    </Heading>
  );
};

EditableTitle.defaultProps = {
  editable: false,
};

export default EditableTitle;
