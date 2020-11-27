import React from 'react';

const TaskFilterBtn = ({ label, isActive }) => {

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
            className={setClassName()}>
            {label}
         </button>
      </li>
   );
};

export default TaskFilterBtn;