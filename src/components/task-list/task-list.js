import React from 'react';
import Task from '../task';

const TaskList = ({ tasks, onDeleted, onToggleCompleted, onToggleEditing }) => {

   const elements = tasks.map((item) => {

      const { key, ...taskItems } = item;

      return (
         <Task
            key={key}
            {...taskItems}
            onDeleted={() => onDeleted(key)}
            onToggleCompleted={() => onToggleCompleted(key)}
            onToggleEditing={() => onToggleEditing(key)} />
      );
   });

   return (
      <ul className="todo-list">
         {elements}
      </ul>
   );
};

export default TaskList;