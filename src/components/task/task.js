import React, { useState } from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import PropTypes from 'prop-types';
import Clocks from '../Clocks';

const Task = ({ description, onDeleted,
                onToggleCompleted, onToggleEditing,
                completed, hidden, time, editing,
                                onKeyCodeDown }) => {
    
    const [label, setLabel] = useState(description);
    
    const onLabelChange = (e) => {
      setLabel(() => e.target.value);
    };
  
    const setClassNames = () => {
      let classNames = '';

      if (editing) {
        classNames += ' editing';
      }

      if (completed) {
        classNames += ' completed';
      }

      if (hidden) {
        classNames += ' hidden';
      }

      return classNames;
    };

  return (
    <li className={setClassNames()}>
      <div className="view">
        <input className="toggle" type="checkbox" onClick={onToggleCompleted} />
        <label htmlFor="description created">
          <span id="description" className="description">
            {label}
          </span>
          <Clocks />
          <span id="created" className="created">
            {formatDistanceToNow(time, { includeSeconds: true })}
          </span>
        </label>
        <button
          type="button"
          className="icon icon-edit"
          onClick={onToggleEditing}
          aria-label="Editing Toggle"
        />
        <button
          type="button"
          className="icon icon-destroy"
          onClick={onDeleted}
          aria-label="Delete Task"
        />
      </div>
      <input
        type="text"
        className="edit"
        onChange={onLabelChange}
        onKeyDown={onKeyCodeDown}
        value={label}
      />
    </li>
  );
}

Task.propTypes = {
  description: PropTypes.string,
  onDeleted: PropTypes.func,
  onToggleCompleted: PropTypes.func,
  onToggleEditing: PropTypes.func,
  completed: PropTypes.bool,
  hidden: PropTypes.bool,
  time: PropTypes.any,
  editing: PropTypes.bool,
  onKeyCodeDown: PropTypes.func,
};

export default Task;