import React from 'react';

const TaskFilterBtn = ({ label, isActive, onToggleActive }) => {

   function setClassName() {
      let classNames = '';
      if (isActive) {
         classNames += ' selected';
      };
      return classNames;
   }

   return (
      <li>
         <button
            className={setClassName()}
            onClick={onToggleActive}>
            {label}
         </button>
      </li>
   );
};

export default TaskFilterBtn;