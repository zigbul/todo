import React, { Component } from 'react';
import TaskFilterBtn from '../Task-filter-btn';

export default class TasksFilter extends Component {

   render() {

      const filterBtns = this.props.filterBtns.map(({ id, ...filterBtnItems }) => {

         return (
            <TaskFilterBtn
               key={id}
               {...filterBtnItems}
               onToggleActive={() => this.props.onToggleActive(id)} />
         );
      });

      return (
         <ul className="filters">
            { filterBtns}
         </ul >
      );
   };
};