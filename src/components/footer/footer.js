import React from 'react';
import TasksFilter from '../Tasks-filter/Tasks-filter';

const Footer = ({ taskCount, onClearCompleted, filterBtns, tasks, onToggleActive }) => {

   return (
      <footer className="footer">
         <span className="todo-count">{taskCount} items left</span>
         <TasksFilter filterBtns={filterBtns} tasks={tasks} onToggleActive={onToggleActive} />
         <button
            className="clear-completed"
            onClick={onClearCompleted}>
            Clear completed
            </button>
      </footer>
   );
};

export default Footer;