import React from 'react';
import PropTypes from 'prop-types';

const TaskFilterBtn = ({ label, isActive, onToggleActive }) => {
  function setClassName() {
    let classNames = '';
    if (isActive) {
      classNames += ' selected';
    }
    return classNames;
  }

  return (
    <li>
      <button type="button" className={setClassName()} onClick={onToggleActive}>
        {label}
      </button>
    </li>
  );
};

TaskFilterBtn.propTypes = {
  label: PropTypes.string,
  isActive: PropTypes.bool,
  onToggleActive: PropTypes.func,
};

export default TaskFilterBtn;
