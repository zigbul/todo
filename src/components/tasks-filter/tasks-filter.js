import React from 'react';
import PropTypes from 'prop-types';
import TaskFilterBtn from '../Task-filter-btn';

const TasksFilter = ({ filterBtns, onToggleActive }) => {
  const filterBtnsArr = filterBtns.map(({ id, ...filterBtnItems }) => {
    return <TaskFilterBtn key={id} {...filterBtnItems} onToggleActive={() => onToggleActive(id)} />;
  });

  return <ul className="filters">{filterBtnsArr}</ul>;
};

TasksFilter.propTypes = {
  filterBtns: PropTypes.array,
  onToggleActive: PropTypes.func,
};

export default TasksFilter;
