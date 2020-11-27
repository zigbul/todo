import React from 'react';
import Task from '../task';

const TaskList = ({ tasks, onDeleted, onToggleCompleted, onToggleEditing }) => {

   const elements = tasks.map(({ id, ...taskItems }) => {

      return (
         <Task
            key={id}
            {...taskItems}
            onDeleted={() => onDeleted(id)}
            onToggleCompleted={() => onToggleCompleted(id)}
            onToggleEditing={() => onToggleEditing(id)} />
      );
   });

   return (
      <ul className="todo-list">
         {elements}
      </ul>
   );
};

export default TaskList;