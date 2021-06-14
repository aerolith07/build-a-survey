import { Heading } from '@chakra-ui/react';
import React from 'react';
import EditableLabel from './EditableLabel';

type EditableTitleProps = {
  title: string,
  editable?: boolean,
  setTitle(value: string): void,
  additionalTitleProps?: { [key: string]: any }
}

const EditableTitle = ({
  title, editable, setTitle, additionalTitleProps,
}: EditableTitleProps) => {
  const titleProps = {
    fontSize: 'xl',
    fontWeight: '600',
    w: '100%',
    m: '2px',
  };

  if (editable) {
    return (
      <Heading {...titleProps} {...additionalTitleProps}>
        <EditableLabel
          editable={editable}
          initialValue={title}
          save={(value) => setTitle(value)}
        />
      </Heading>
    );
  }

  return (
    <Heading {...titleProps} {...additionalTitleProps}>
      {title}
    </Heading>
  );
};

EditableTitle.defaultProps = {
  editable: false,
  additionalTitleProps: {},
};

export default EditableTitle;
