import React from 'react'
import './App.css';

function App(){
  const [items, setItems]=React.useState([])
  const [value, setValue]=React.useState([])
  const [test123, setTest123]=React.useState(6)

  function handleSubmit(e){
    e.preventDefault();
    setItems([...items,value])
    setValue("")
  }

  return(
    <div>
      <h1>TODO</h1>
      <TodoList items={items}/>
      <form onSubmit={handleSubmit}>
      <label htmlFor="new-todo">Add todo: </label>
      <input 
        id="new-todo"
        value={value}
        placeholder="addtodo"
        onChange={e=>setValue(e.target.value)}
        />
        <h1>{value}</h1>
        <button>
          Add #{items.length+1}
        </button>
      </form>
    </div>
  )

}

function TodoList(props){
  return (
    <ul>
      {props.items.map((item,i)=>{
        <li key={i}>item</li>
      })}
    </ul>
  )
}

export default App;
