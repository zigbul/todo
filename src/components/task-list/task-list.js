import React from 'react';
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