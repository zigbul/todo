import React, { Component } from 'react';
import '../../index.css';

import NewTaskForm from '../new-task-form';
import TaskList from '../task-list';
import Footer from '../footer';
import { waitForElementToBeRemoved } from '@testing-library/react';

export default class TodoApp extends Component {

   setID() {
      return '_' + Math.random().toString(36).substr(2, 9);
   }

   state = {
      taskData: [
         this.createTodoItem('Completed Task'),
         this.createTodoItem('Editing Task'),
         this.createTodoItem('New Task'),
      ],
      filterBtnsData: [
         { label: 'All', isActive: false, id: 1 },
         { label: 'Active', isActive: true, id: 2 },
         { label: 'Completed', isActive: false, id: 3 }
      ]
   };

   createTodoItem(description) {
      return {
         description,
         completed: false,
         editing: false,
         id: this.setID(),
         hidden: false,
      }
   }

   deleteItem = (id) => {
      this.setState(({ taskData }) => {

         const newTaskData = taskData.filter((el) => el.id !== id);

         return {
            taskData: newTaskData
         };
      });
   };

   addItem = (text) => {

      const newItem = this.createTodoItem(text);

      this.setState(({ taskData }) => {

         const newTaskData = [
            ...taskData,
            newItem
         ];

         return {
            taskData: newTaskData
         };
      });
   };

   toggleProperty(arr, id, propName) {

      return arr.map((item) => {

         if (item.id === id) {
            let newItem = { ...item, [propName]: !item[propName] };
            return newItem;
         };

         return item;
      });
   };

   onToggleCompleted = (id) => {
      this.setState(({ taskData }) => {
         return {
            taskData: this.toggleProperty(taskData, id, 'completed')
         };
      });
   };

   onToggleEditing = (id) => {
      this.setState(({ taskData }) => {
         return {
            taskData: this.toggleProperty(taskData, id, 'editing')
         };
      });
   };

   onClearCompleted = () => {
      const newArr = this.state.taskData.filter(el => !el.completed);
      this.setState(() => {
         return {
            taskData: newArr
         };
      });
   };

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

      this.state.filterBtnsData.forEach(el => {
         if (el.isActive && el.id === 3) {
            const newArr = this.state.taskData.map(data => {
               if (data.completed === false) {
                  const newData = { ...data, hidden: true };
                  return newData;
               } else if (data.completed) {
                  const newData = { ...data, hidden: false };
                  return newData;
               }
            });
            this.setState(() => {
               return {
                  taskData: newArr
               };
            });
         } else if (el.isActive && el.id === 2) {
            const newArr = this.state.taskData.map(data => {
               if (data.completed) {
                  const newData = { ...data, hidden: true };
                  return newData;
               } else if (data.completed === false) {
                  const newData = { ...data, hidden: false };
                  return newData;
               }
            });
            this.setState(() => {
               return {
                  taskData: newArr
               };
            });
         } else if (el.isActive && el.id === 1) {
            const newArr = this.state.taskData.map(data => {
               const newData = { ...data, hidden: false };
               return newData;
            });
            this.setState(() => {
               return {
                  taskData: newArr
               };
            });
         }
      });
   };

   render() {

      const { taskData, filterBtnsData } = this.state;
      const completedCount = taskData.filter((el) => el.completed).length;
      const taskCount = taskData.length - completedCount;

      return (
         <section className="todoapp" >
            <header className="header">
               <h1>todos</h1>
               <NewTaskForm onItemAdded={this.addItem} />
            </header>
            <section className="main">
               <TaskList
                  tasks={taskData}
                  onDeleted={this.deleteItem}
                  onToggleCompleted={this.onToggleCompleted}
                  onToggleEditing={this.onToggleEditing}
                  filterBtns={filterBtnsData} />
               <Footer
                  taskCount={taskCount}
                  onClearCompleted={this.onClearCompleted}
                  filterBtns={filterBtnsData}
                  onToggleActive={this.onToggleActive} />
            </section>
         </section>
      );
   };
};