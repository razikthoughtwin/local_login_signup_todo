import React, { Component } from 'react';
import Task from './Task';


class AddTask extends Component {
  state = {
    task: ''
  };

  handleChange = e => {
    this.setState({ task: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onAddTask(this.state.task);
    this.setState({ task: '' });
  };

  renderTasks() {
    return this.state.tasks.map(task => (
      <Task key={task.id} id={task.id} task={task.task} onDeleteTask={this.handleDeleteTask} />
    ));
  }

  handleAddTask = task => {
    const tasks = [...this.state.tasks];
    tasks.push({ id: tasks.length + 1, task });
    this.setState({ tasks });
  };

  handleDeleteTask = id => {
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex(task => task.id === id);
    tasks.splice(index, 1);
    this.setState({ tasks });
  };


  render() {
    return (
      <div className='d-flex border border-primary w-25 justify-content-evenly p-4'>
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.task} onChange={this.handleChange} className='m-4'/>
        <button className='btn btn-secondary'>Add Task</button>
      </form>
      </div>
    
      
    );
  }
}

export default AddTask;