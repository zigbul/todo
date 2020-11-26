import React from 'react';

const NewTaskForm = ({ onItemAdded }) => {
   return (
      <input
         className="new-todo"
         placeholder="What needs to be done?"
         autoFocus
         onKeyDown={() => onItemAdded('Hello, world!')} />
   );
};

export default NewTaskForm;