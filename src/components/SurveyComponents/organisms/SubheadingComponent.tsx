import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import * as actions from '../../../state/surveyQuestions/subheading/subheadingAction';
import Subheading from '../atoms/Subheading';

interface SubheadingComponentProps extends PropsFromRedux {
  title: string;
  editable?: boolean;
  id: string;
}

const SubheadingComponent = ({
  id,
  setSubheading,
  title,
  editable,
}: SubheadingComponentProps) => (
  <>
    {title && (
      <Subheading
        editable={editable}
        setSubheading={(value) => setSubheading({ id, value })}
        subheading={title}
      />
    )}
  </>
);

SubheadingComponent.defaultProps = {
  editable: false,
};

const mapDispatchToProps = {
  setSubheading: actions.setSubheading,
};

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(SubheadingComponent);
