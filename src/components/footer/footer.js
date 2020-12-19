import React from 'react';
import PropTypes from 'prop-types';
import TasksFilter from '../Tasks-filter/Tasks-filter';

const Footer = ({ taskCount, onClearCompleted, filterBtns, onToggleActive }) => {
  return (
    <footer className="footer">
      <span className="todo-count">{taskCount} items left</span>
      <TasksFilter filterBtns={filterBtns} onToggleActive={onToggleActive} />
      <button type="button" className="clear-completed" onClick={onClearCompleted}>
        Clear completed
      </button>
    </footer>
  );
};

Footer.propTypes = {
  taskCount: PropTypes.func,
  onClearCompleted: PropTypes.func,
  filterBtns: PropTypes.array,
  onToggleActive: PropTypes.func,
};

export default Footer;
