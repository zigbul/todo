import React, { Component } from 'react';
import TaskFilterBtn from '../task-filter-btn';

export default class TasksFilter extends Component {

   state = {
      filterBtnsData: [
         { label: 'All', isActive: false, id: 1 },
         { label: 'Active', isActive: true, id: 2 },
         { label: 'Completed', isActive: false, id: 3 }
      ]
   }

   activeToggler(arr, id, propName) {
      return arr.map((item) => {

         if (item.id === id && item.isActive === false) {
            let newItem = { ...item, [propName]: !item[propName] };
            return newItem;
         } else if (item.id !== id && item.isActive === true) {
            let newItem = { ...item, [propName]: !item[propName] };
            return newItem;
         }
         return item;
      });
   };

   onToggleActive = (id) => {
      this.setState(({ filterBtnsData }) => {
         return {
            filterBtnsData: this.activeToggler(filterBtnsData, id, 'isActive')
         };
      });
      this.props.tasks.forEach(el => {
         if (id === 3 && el.completed === true) {
            el.className = ' hidden';
         }
      });
   };

   render() {

      const filterBtns = this.state.filterBtnsData.map(({ id, ...filterBtnItems }) => {

         return (
            <TaskFilterBtn
               key={id}
               {...filterBtnItems}
               onToggleActive={() => this.onToggleActive(id)} />
         );
      });

      return (
         <ul className="filters">
            { filterBtns}
         </ul >
      );
   };
};