import React, { Component } from 'react';
import TaskFilterBtn from '../task-filter-btn';

export default class TasksFilter extends Component {

   state = {
      filterBtnsData: [
         { label: 'All', isActive: false, id: 4 },
         { label: 'Active', isActive: true, id: 5 },
         { label: 'Completed', isActive: false, id: 6 }
      ]
   }

   render() {

      const filterBtns = this.state.filterBtnsData.map(({ id, ...filterBtnItems }) => {
         return (
            <TaskFilterBtn
               key={id}
               {...filterBtnItems} />
         );
      });

      return (
         <ul className="filters">
            { filterBtns}
         </ul >
      );
   };
};