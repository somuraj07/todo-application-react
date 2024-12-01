import React,{useState} from 'react'
import { TodoForm } from './TodoForm'
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './Todo';
uuidv4();
export const TodoWrapper = () => {
  const [todos,setTodes] = useState([])
  const addTodo = todo => {
    setTodes([...todos,{id:uuidv4(),task:todo,completed:false,isEditing:false}])
    console.log(todos)
  }
  const togglecompleted = id => {
setTodes(todos.map(todo => todo.id === id ? {...todo,completed:!todo.completed} :todo))
  }
  const deleteTodo = id => {
    setTodes(todos.filter(todo => todo.id !== id))
  }
  return (
    <div className='TodoWrapper'>
      <h1>Get Things Done !</h1>
    < TodoForm addTodo={addTodo}/>
    
    {todos.map((todo,index)=> (
      <Todo task={todo} key={index}togglecompleted={togglecompleted} deleteTodo={deleteTodo} />
      ))}
    </div>
  )
}
