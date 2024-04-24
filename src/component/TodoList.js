import React, { Component } from 'react';
import Task from './Task';
import AddTask from './AddTask';

class TodoList extends Component {
  state = {
    tasks: [
      { id: 1, task: 'Buy groceries' },
      { id: 2, task: 'Go for a walk' }
    ]
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
      <div className='d-flex align-items-center flex-column'>
        <h1>To-Do List</h1>
        <AddTask onAddTask={this.handleAddTask} />
      
        <ul className='border border-primary w-25 mt-5'>{this.renderTasks()}</ul>
      </div>
    );
  }
}

export default TodoList;