import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import { v4 as uuidv4 } from 'uuid';
 // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

function App() {

  const[todo,setTodo] = useState("");
  const[todos,setTodos] = useState([]);

  const handleAdd = () => {
    setTodos([...todos, {id:uuidv4(),todo, isCompleted: false}])
    setTodo("")
    console.log(todos)
  }
  const handleDelete = () => {
    console.log('clicked2')
  }
  const handleEdit = () => {
    console.log('clicked3')
  }
  const handleChange = (e) => {
    setTodo(e.target.value);
  }
  const handleCheckBox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item=> {
      return item.id === id;
    })
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos)
  }

  return (
    <>
    <Navbar/>
      <div className="container mx-auto my-5 rounded-xl p-5 bg-gray-200 min-h-[80vh]">
          <div className=''>
            <h2 className='text-lg font-bold'>Add a Todo</h2>
            <input onChange={handleChange} value={todo} className='rounded-md p-0.5 px-2 w-70' placeholder='Enter Your to-do...' type="text" id="" />
            <button onClick={handleAdd} className="bg-violet-700 p-2 py-1 text-sm font-bold hover:bg-violet-900 text-white mx-6 rounded-md">Add</button>
          </div>
          <h2 className='text-lg font-bold pt -4 '>Your Todos</h2>
          <div className="todos">
            {todos.map(item=>{

            
           return <div key={item.id} className=" flex w-full justify-between my-3">
            <input onChange={handleCheckBox} type="checkbox" value={todo.isCompleted} name={item.id} id="" />
            <div className={item.isCompleted?'line-through':""}>
              {item.todo}
            </div>
            <div className="button">
              <button onClick={handleEdit} className="bg-violet-700 p-2 py-1 text-sm font-bold hover:bg-violet-900 text-white mx-6 rounded-md">Edit</button>
              <button onClick={handleDelete} className="bg-violet-700 p-2 py-1 text-sm font-bold hover:bg-violet-900 text-white mx-6 rounded-md">Delete</button>
            </div>
          </div>
          })}
          </div>
          
      </div>
   

    </>
  )
}

export default App
