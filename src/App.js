import React, { useState } from 'react';
import './App.css';
 
function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
 
  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() === '') return;
    
    const task = {
      id: Date.now(),
      text: newTask,
      completed: false,
    };
    
    setTasks([...tasks, task]);
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
        <form onSubmit={handleAddTask} className="task-form">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Afegeix una nova tasca..."
          />
          <button type="submit">Afegir</button>
        </form>
        <ul className="task-list">
          {tasks.map((task) => (
            <li key={task.id} className={task.completed ? 'completed' : ''}>
              <span onClick={() => handleToggleComplete(task.id)}>
                {task.text}
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
 
