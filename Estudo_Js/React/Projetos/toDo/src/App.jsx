/* eslint-disable react/jsx-key */
import { useState } from 'react'

// Componets
import ToDo from './components/ToDo'
import ToDoForm from './components/ToDoForm'

import './App.css'

function App() {
  // eslint-disable-next-line no-unused-vars
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Learn React",
      category: "Estudos",
      inCompleted: false,
    },
    {
      id: 2,
      text: "Estudar React",
      category: "Estudos",
      inCompleted: false,
    },
    {
      id: 3,
      text: "Controle de Setor",
      category: "Trabalho",
      inCompleted: false,
    },
    {
      id: 4,
      text: "Ir para academia",
      category: "Pessoal",
      inCompleted: false,
    },
  ])

  return (
    <>
      <div className='app'>
        <h1>Lista de Tarefas</h1>
        <div className='todo=list'>
          {todos.map((todo)=>(
            <ToDo todo={todo}/>

          ))}
        </div>
        <ToDoForm />

      </div>
    </>
  )
}

export default App
