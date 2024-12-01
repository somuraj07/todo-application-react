import React,{useState} from 'react'
import { TodoForm } from './TodoForm'
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './Todo';
import { EditTodoForm } from './EditTodoForm';
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
  const editTodo = id => {
    setTodes(todos.map(todo => todo.id === id ? {...todo,isEditing: !todo.isEditing} :todo))
  }
const editTask = (task,id) =>{
  setTodes(todos.map(todo => todo.id === id ? {...todo,task,isEditing:!todo.isEditing} :todo))
}
  return (
    <div className='TodoWrapper'>
      <h4>#PURPLE</h4>
      <h1>Get Things Done !</h1>
    < TodoForm addTodo={addTodo}/>
    
    {todos.map((todo,index)=> (
      todo.isEditing ? (
        <EditTodoForm editTodo={editTask} task={todo}/>
      ) : (
        <Todo task={todo} key={index}togglecompleted={togglecompleted} deleteTodo={deleteTodo} editTodo={editTodo}/>
      )
      ))}
    </div>
  )
}
