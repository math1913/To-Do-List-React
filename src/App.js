import React, { useState } from 'react';
import './App.css';
 
function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
 
  const handleAddTask = (e, priority = false) => {
    e.preventDefault();
    if (newTask.trim() === '') return;
    
    const task = {
      id: Date.now(),
      text: newTask,
      completed: false,
      priority: priority,
    };
    
    setTasks([...tasks, task].sort((a, b) => b.priority - a.priority));
    setNewTask('');
  };
 
  const handleToggleComplete = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };
 
  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };
 
  return (
    <div className="app-container">
      <div className="todo-container">
        <h1>La Meva Llista de Tasques</h1>
        <form className="task-form">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Afegeix una nova tasca..."
          />
          <button onClick={(e) => handleAddTask(e, false)}>Afegir</button>
          <button
            onClick={(e) => handleAddTask(e, true)}
            className="priority-btn"
          >
            Afegir amb prioritat
          </button>
        </form>
        <ul className="task-list">
          {tasks.map((task) => (
            <li
              key={task.id}
              className={`${task.completed ? 'completed' : ''} ${task.priority ? 'priority' : ''}`}
            >
              <span onClick={() => handleToggleComplete(task.id)}>
                {task.priority ? '⭐ ' : ''}{task.text}
              </span>
              <button onClick={() => handleDeleteTask(task.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
 
export default App;
