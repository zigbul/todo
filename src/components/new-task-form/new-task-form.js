import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ENTER_KEY_CODE } from '../../constants';

const NewTaskForm = ({ onItemAdded }) => {

  const [label, setLabel] = useState('');

  const onLabelChange = (e) => {
    setLabel(() => e.target.value);
  };

  const onKeyDown = (e) => {

    if (e.keyCode === ENTER_KEY_CODE) {
      onItemAdded(label);
      setLabel(() => '');
    }
  };

  return (
    <input
      className="new-todo"
      placeholder="What needs to be done?"
      onChange={onLabelChange}
      onKeyDown={onKeyDown}
      value={label}
    />
  );
}

NewTaskForm.propTypes = {
  onItemAdded: PropTypes.func,
};

export default NewTaskForm;