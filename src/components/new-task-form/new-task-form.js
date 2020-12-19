import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ENTER_KEY_CODE } from '../../constants';

export default class NewTaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: '',
    };
  }

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  onKeyDown = (e) => {
    const { onItemAdded } = this.props;
    const { label } = this.state;

    if (e.keyCode === ENTER_KEY_CODE) {
      onItemAdded(label);
      this.setState({
        label: '',
      });
    }
  };

  render() {
    const { label } = this.state;
    return (
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        onChange={this.onLabelChange}
        onKeyDown={this.onKeyDown}
        value={label}
      />
    );
  }
}

NewTaskForm.propTypes = {
  onItemAdded: PropTypes.func,
};
