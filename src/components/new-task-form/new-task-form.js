import React, { Component } from 'react';
export default class NewTaskForm extends Component {

   state = {
      label: ''
   };

   onLabelChange = (e) => {
      this.setState({
         label: e.target.value
      });
   };

   onKeyDown = (e) => {
      const ENTER_KEY_CODE = 13;
      if (e.keyCode === ENTER_KEY_CODE) {
         this.props.onItemAdded(this.state.label);
         this.setState({
            label: ''
         });
      };
   };

   render() {

      return (
         <input
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus
            onChange={this.onLabelChange}
            onKeyDown={this.onKeyDown}
            value={this.state.label} />
      );
   };
};