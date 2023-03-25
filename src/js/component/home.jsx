import React, { useState } from 'react';


function Home() {
  // Declaración del estado del componente para almacenar las tareas
  const [tasks, setTasks] = useState([]);
  // Declaración del estado del componente para almacenar la entrada de usuario
  const [inputValue, setInputValue] = useState('');

  // Función para manejar el envío del formulario
  function handleSubmit(event) {
    event.preventDefault(); // Prevención de comportamiento predeterminado del formulario
    if (inputValue !== '') { // Verificación de que la entrada no está vacía
      // Creación de un nuevo objeto de tarea
      const newTask = { id: Date.now(), title: inputValue };
      // Actualización del estado de las tareas mediante la adición del objeto creado
      setTasks([...tasks, newTask]);
      // Reinicio del estado de la entrada
      setInputValue('');
    }
  }

  // Función para manejar el cambio en la entrada de usuario
  function handleChange(event) {
    setInputValue(event.target.value); // Actualización del estado de la entrada
  }

  // Función para eliminar una tarea seleccionada
  function handleDelete(id) {
    // Actualización del estado de las tareas mediante la eliminación de la tarea seleccionada
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <div className="container">
      <h1>To Do List</h1>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Ingrese una nueva tarea
          ..."
          value={inputValue}
          onChange={handleChange}
        />
        <button type="submit">Agregar</button>
      </form>
      <ul>
        {/* Renderizado de cada tarea en la lista */}
        {tasks.map((task) => (
          <li key={task.id}>
            <p>{task.title}</p>
            <button onClick={() => handleDelete(task.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      {/* Contador de tareas */}
      <p>Total de Tareas: {tasks.length}</p>
    </div>
  );
}

export default Home;