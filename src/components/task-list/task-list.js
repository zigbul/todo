import React from 'react';
import PropTypes from 'prop-types';
import Task from '../Task';

const TaskList = ({ tasks, onDeleted, onToggleCompleted, onToggleEditing, onKeyCodeDown }) => {
  const elements = tasks.map(({ id, ...taskItems }) => {
    return (
      <Task
        key={id}
        {...taskItems}
        onKeyCodeDown={(e) => onKeyCodeDown(e, id)}
        onDeleted={() => onDeleted(id)}
        onToggleCompleted={() => onToggleCompleted(id)}
        onToggleEditing={() => onToggleEditing(id)}
      />
    );
  });

  return <ul className="todo-list">{elements}</ul>;
};

TaskList.propTypes = {
  tasks: PropTypes.array,
  onDeleted: PropTypes.func,
  onToggleCompleted: PropTypes.func,
  onToggleEditing: PropTypes.func,
  onKeyCodeDown: PropTypes.func,
};

export default TaskList;
