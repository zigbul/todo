import React, { useState } from 'react';
import '../../index.css';
import { ENTER_KEY_CODE, ESC_KEY_CODE } from '../../constants';

import NewTaskForm from '../New-task-form';
import TaskList from '../Task-list';
import Footer from '../Footer';

const TodoApp = () => {

  const setID = () => {
    return `_${Math.random().toString(36).substr(2, 9)}`;
  };

  const createTodoItem = (description) => {
    return {
      description,
      completed: false,
      editing: false,
      id: setID(),
      hidden: false,
      time: new Date(),
    };
  };

  const [taskData, setTaskData] = useState(
    [
      createTodoItem('Completed Task'),
      createTodoItem('Editing Task'),
      createTodoItem('New Task'),
    ]
  );
  const [filterBtnsData, setFilterBtnsData] = useState(
    [
      { label: 'All', isActive: false, id: 1 },
      { label: 'Active', isActive: true, id: 2 },
      { label: 'Completed', isActive: false, id: 3 },
    ]
  );

  const deleteItem = (id) => {
      const newTaskData = taskData.filter((el) => el.id !== id);
      setTaskData(newTaskData);
  };

  const addItem = (text) => {
    const newItem = createTodoItem(text);
    const newTaskData = [...taskData, newItem];
    setTaskData(newTaskData);
  };

  const toggleProperty = (arr, id, propName) => {
    return arr.map((item) => {
      if (item.id === id) {
        const newItem = { ...item, [propName]: !item[propName] };
        return newItem;
      }

      return item;
    });
  };

  const onToggleCompleted = (id) => {
    setTaskData(toggleProperty(taskData, id, 'completed'));
  };

  const onToggleEditing = (id) => {
    setTaskData(toggleProperty(taskData, id, 'editing'));
  };

  const onClearCompleted = () => {
    const newArr = taskData.filter((el) => !el.completed);
    setTaskData(newArr);
  };

  const activeToggler = (arr, id, propName) => {
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
  };

  const onToggleActive = (id) => {
    setFilterBtnsData(activeToggler(filterBtnsData, id, 'isActive'));

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
        setTaskData(newArr);
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
        setTaskData(newArr);
      } else if (el.isActive && el.id === 1) {
        const newArr = taskData.map((data) => {
          const newData = { ...data, hidden: false };
          return newData;
        });
        setTaskData(newArr);
      }
    });
  };

  const onKeyCodeDown = (e, id) => {
    if (e.keyCode === ENTER_KEY_CODE || e.keyCode === ESC_KEY_CODE) {
      setTaskData(toggleProperty(taskData, id, 'editing'))
    };
  };

  const completedCount = taskData.filter((el) => el.completed).length;
  const taskCount = taskData.length - completedCount;

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm onItemAdded={addItem} />
      </header>
      <section className="main">
        <TaskList
          tasks={taskData}
          onDeleted={deleteItem}
          onToggleCompleted={onToggleCompleted}
          onToggleEditing={onToggleEditing}
          filterBtns={filterBtnsData}
          onKeyCodeDown={onKeyCodeDown}
        />
        <Footer
          taskCount={taskCount}
          onClearCompleted={onClearCompleted}
          filterBtns={filterBtnsData}
          onToggleActive={onToggleActive}
        />
      </section>
    </section>
  );
};

export default TodoApp;