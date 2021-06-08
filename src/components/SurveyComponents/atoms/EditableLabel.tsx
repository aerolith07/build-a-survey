/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const EditableLabel = ({
  initialValue,
  save,
  editable,
  disableKeys,
  inputClass,
  labelClass,
  inputName,
  inputId,
}) => {
  const [view, updateView] = useState('label');
  const [value, setValue] = useState(initialValue);
  const [previous, setPrevious] = useState(initialValue);
  const textInput = useRef(null);

  const setView = (updatedView: string) => {
    if (editable) {
      updateView(updatedView);
    }
  };

  useEffect(() => {
    if (view === 'text') {
      textInput.current.focus();
    }
  }, [view, textInput]);

  const keyUp = (e) => {
    if (disableKeys === true) {
      return;
    }

    if (e.key === 'Escape') {
      setValue(previous);
      setView('label');
    } else if (e.key === 'Enter') {
      setValue(e.target.value);
      setPrevious(e.target.value);
      setView('label');

      save(e.target.value);
    }
  };

  const renderLabel = () => (
    <span
      className={labelClass !== undefined ? labelClass : ''}
      onClick={() => {
        setView('text');
      }}
    >
      {value}
    </span>
  );

  const renderInput = () => (
    <div>
      <Input
        type="text"
        value={value}
        ref={textInput}
        className={inputClass !== undefined ? inputClass : ''}
        id={inputId !== undefined ? inputId : ''}
        name={inputName !== undefined ? inputName : ''}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        onBlur={(e) => {
          setView('label');
          setPrevious(e.target.value);

          save(e.target.value);
        }}
        onKeyUp={keyUp}
      />
    </div>
  );

  return view === 'label' ? renderLabel() : renderInput();
};

const Input = styled.input`
  width: 100%;
`;

EditableLabel.propTypes = {
  initialValue: PropTypes.string.isRequired,
  save: PropTypes.func.isRequired,
  editable: PropTypes.bool.isRequired,
  labelClass: PropTypes.string,
  inputClass: PropTypes.string,
  inputName: PropTypes.string,
  inputId: PropTypes.string,
  disableKeys: PropTypes.bool,
};

EditableLabel.defaultProps = {
  editable: false,
};

export default EditableLabel;
