import React, { Component } from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import PropTypes from 'prop-types';

export default class Task extends Component {

   state = {
      description: this.props.description,
      editing: this.props.editing
   }

   static defaultProps = {
      completed: false,
      editing: false,
      hidden: false,
      time: new Date(),
   }

   static propTypes = {
      completed: PropTypes.bool,
      editing: PropTypes.bool,
      hidden: PropTypes.bool,
      onDeleted: PropTypes.func,
      time: PropTypes.any.isRequired
   }

   onLabelChange = (e) => {
      this.setState({
         description: e.target.value
      });
   };

   render() {

      const { onDeleted,
         onToggleCompleted, onToggleEditing,
         completed, hidden, time, editing, onKeyCodeDown } = this.props;

      const setClassNames = () => {
         let classNames = '';

         if (editing) {
            classNames += ' editing';
         }

         if (completed) {
            classNames += ' completed'
         }

         if (hidden) {
            classNames += ' hidden'
         }

         return classNames;
      }


      return (
         <li className={setClassNames()}>
            <div className="view">
               <input
                  className="toggle"
                  type="checkbox"
                  onClick={onToggleCompleted} />
               <label>
                  <span className="description">{this.state.description}</span>
                  <span className="created">{formatDistanceToNow(time, { includeSeconds: true })}</span>
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
            <input
               type="text"
               className="edit"
               onChange={this.onLabelChange}
               onKeyDown={onKeyCodeDown}
               value={this.state.description} />
         </li >
      );
   };
};