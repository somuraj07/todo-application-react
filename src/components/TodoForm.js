import React,{useState} from 'react'

export const TodoForm = ({addTodo}) => {
  const [value,setValue] = useState("")
  const handlesubmit = e => {
    e.preventDefault();
    addTodo(value)
    setValue("")
  }
  return (
    <form className='TodoForm' onSubmit={handlesubmit}>
      <input type='text' className='todo-input' value={value} placeholder='What is the task the today'
      onChange={(e)=>setValue(e.target.value)} />
      <button type='submit' className='todo-btn'>ADD TASK</button>
      
    </form>
  )
}
