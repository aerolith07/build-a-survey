import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import Title from '../atoms/Title';
import * as actions from '../../../state/surveyQuestions/title/titleAction';

interface TitleComponentProps extends PropsFromRedux {
  title: string;
  editable?: boolean;
  id: string;
}

const TitleComponent = ({
  id,
  setTitle,
  title,
  editable,
}: TitleComponentProps) => (
  <>
    {title && (
      <Title
        additionalTitleProps={{ fontSize: '3xl' }}
        editable={editable}
        setTitle={(value) => setTitle({ id, value })}
        title={title}
      />
    )}
  </>
);

TitleComponent.defaultProps = {
  editable: false,
};

const mapDispatchToProps = {
  setTitle: actions.setTitle,
};

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(TitleComponent);
