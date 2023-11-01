/* eslint-disable no-unused-vars */
import React from 'react'

const ToDoForm = () => {
    return (
        <div className='todo-form'>
            <h2>Criar Tarefa</h2>
            <form action="">
                <input type="text" name="" id="" placeholder="Nome da tarefa"/>
                <select name="" id="">
                    <option value="">Selecione a categoria</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Estudo">Estudo</option>
                    <option value="Pessoal">Pessoal</option>
                    <option value="Lazer">Lazer</option>
                </select>
                <button type='submit'>Criar tarefa</button>
            </form>
        </div>
    )
}

export default ToDoForm
