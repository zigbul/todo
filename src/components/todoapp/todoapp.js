import React, { Component } from 'react';
import '../../index.css';

import NewTaskForm from '../new-task-form';
import TaskList from '../task-list';
import Footer from '../footer';

export default class TodoApp extends Component {

   maxId = 100;

   state = {
      taskData: [
         this.createTodoItem('Completed Task'),
         this.createTodoItem('Editing Task'),
         this.createTodoItem('New Task'),
      ]
   };

   createTodoItem(description) {
      return {
         description,
         completed: false,
         editing: false,
         key: this.maxId++
      }
   }

   deleteItem = (key) => {
      this.setState(({ taskData }) => {

         const idx = taskData.findIndex((el) => el.key === key);

         const before = taskData.slice(0, idx);
         const after = taskData.slice(idx + 1);

         const newTaskData = [...before, ...after];

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

   toggleProperty(arr, key, propName) {
      const idx = arr.findIndex((el) => el.key === key);

      const oldItem = arr[idx];
      const newItem = { ...oldItem, [propName]: !oldItem[propName] };

      const before = arr.slice(0, idx);
      const after = arr.slice(idx + 1);

      return [...before, newItem, ...after];
   };

   onToggleCompleted = (key) => {
      this.setState(({ taskData }) => {
         return {
            taskData: this.toggleProperty(taskData, key, 'completed')
         };
      });
   };

   onToggleEditing = (key) => {
      this.setState(({ taskData }) => {
         return {
            taskData: this.toggleProperty(taskData, key, 'editing')
         };
      });
   };

   render() {

      const { taskData } = this.state;
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
                  onToggleEditing={this.onToggleEditing} />
               <Footer taskCount={taskCount} />
            </section>
         </section>
      );
   };
};