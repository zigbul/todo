import React from 'react';
import TasksFilter from '../tasks-filter/tasks-filter';

const Footer = ({ taskCount }) => {
   return (
      <footer className="footer">
         <span className="todo-count">{taskCount} items left</span>
         <TasksFilter />
         <button className="clear-completed">Clear completed</button>
      </footer>
   );
};

export default Footer;