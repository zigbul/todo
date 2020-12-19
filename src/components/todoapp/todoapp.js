import React, { Component } from 'react';
import '../../index.css';
import { ENTER_KEY_CODE, ESC_KEY_CODE } from '../../constants';

import NewTaskForm from '../New-task-form';
import TaskList from '../Task-list';
import Footer from '../Footer';

export default class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskData: [
        this.createTodoItem('Completed Task'),
        this.createTodoItem('Editing Task'),
        this.createTodoItem('New Task'),
      ],
      filterBtnsData: [
        { label: 'All', isActive: false, id: 1 },
        { label: 'Active', isActive: true, id: 2 },
        { label: 'Completed', isActive: false, id: 3 },
      ],
    };
  }

  setID = () => {
    return `_${Math.random().toString(36).substr(2, 9)}`;
  };

  deleteItem = (id) => {
    this.setState(({ taskData }) => {
      const newTaskData = taskData.filter((el) => el.id !== id);

      return {
        taskData: newTaskData,
      };
    });
  };

  addItem = (text) => {
    const newItem = this.createTodoItem(text);

    this.setState(({ taskData }) => {
      const newTaskData = [...taskData, newItem];

      return {
        taskData: newTaskData,
      };
    });
  };

  onToggleCompleted = (id) => {
    this.setState(({ taskData }) => {
      return {
        taskData: this.toggleProperty(taskData, id, 'completed'),
      };
    });
  };

  onToggleEditing = (id) => {
    this.setState(({ taskData }) => {
      return {
        taskData: this.toggleProperty(taskData, id, 'editing'),
      };
    });
  };

  onClearCompleted = () => {
    const { taskData } = this.state;
    const newArr = taskData.filter((el) => !el.completed);
    this.setState(() => {
      return {
        taskData: newArr,
      };
    });
  };

  onToggleActive = (id) => {
    this.setState(({ filterBtnsData }) => {
      return {
        filterBtnsData: this.activeToggler(filterBtnsData, id, 'isActive'),
      };
    });

    const { taskData, filterBtnsData } = this.state;

    filterBtnsData.forEach((el) => {
      if (el.isActive && el.id === 3) {
        const newArr = taskData.map((data) => {
          if (data.completed === false) {
            const newData = { ...data, hidden: true };
            return newData;
          }
          if (data.completed) {
            const newData = { ...data, hidden: false };
            return newData;
          }
          return data;
        });
        this.setState(() => {
          return {
            taskData: newArr,
          };
        });
      } else if (el.isActive && el.id === 2) {
        const newArr = taskData.map((data) => {
          if (data.completed) {
            const newData = { ...data, hidden: true };
            return newData;
          }
          if (data.completed === false) {
            const newData = { ...data, hidden: false };
            return newData;
          }
          return data;
        });
        this.setState(() => {
          return {
            taskData: newArr,
          };
        });
      } else if (el.isActive && el.id === 1) {
        const newArr = taskData.map((data) => {
          const newData = { ...data, hidden: false };
          return newData;
        });
        this.setState(() => {
          return {
            taskData: newArr,
          };
        });
      }
    });
  };

  onKeyCodeDown = (e, id) => {
    if (e.keyCode === ENTER_KEY_CODE || e.keyCode === ESC_KEY_CODE) {
      this.setState(({ taskData }) => {
        return {
          taskData: this.toggleProperty(taskData, id, 'editing'),
        };
      });
    }
  };

  activeToggler(arr, id, propName) {
    return arr.map((item) => {
      if (item.id === id && item.isActive === false) {
        const newItem = { ...item, [propName]: !item[propName] };
        return newItem;
      }
      if (item.id !== id && item.isActive === true) {
        const newItem = { ...item, [propName]: !item[propName] };
        return newItem;
      }
      return item;
    });
  }

  toggleProperty(arr, id, propName) {
    return arr.map((item) => {
      if (item.id === id) {
        const newItem = { ...item, [propName]: !item[propName] };
        return newItem;
      }

      return item;
    });
  }

  createTodoItem(description) {
    return {
      description,
      completed: false,
      editing: false,
      id: this.setID(),
      hidden: false,
      time: new Date(),
    };
  }

  render() {
    const { taskData, filterBtnsData } = this.state;
    const completedCount = taskData.filter((el) => el.completed).length;
    const taskCount = taskData.length - completedCount;

    return (
      <section className="todoapp">
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
            filterBtns={filterBtnsData}
            onKeyCodeDown={this.onKeyCodeDown}
          />
          <Footer
            taskCount={taskCount}
            onClearCompleted={this.onClearCompleted}
            filterBtns={filterBtnsData}
            onToggleActive={this.onToggleActive}
          />
        </section>
      </section>
    );
  }
}
