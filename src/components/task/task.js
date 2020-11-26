import React, { Component } from 'react';

export default class Task extends Component {

   render() {

      const { description, onDeleted,
         onToggleCompleted, onToggleEditing,
         completed, editing } = this.props;

      let classNames = '';

      if (editing) {
         classNames += ' editing';
      }

      if (completed) {
         classNames += ' completed'
      }

      return (
         <li className={classNames}>
            <div className="view">
               <input
                  className="toggle"
                  type="checkbox"
                  onClick={onToggleCompleted} />
               <label>
                  <span className="description">{description}</span>
                  <span className="created">created 5 minutes ago</span>
               </label>
               <button
                  className="icon icon-edit"
                  onClick={onToggleEditing} >
               </button>
               <button
                  className="icon icon-destroy"
                  onClick={onDeleted}>
               </button>
            </div>
            <input type="text" className="edit" value={description} />
         </li >
      );
   };
};