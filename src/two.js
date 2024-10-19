import { useState } from "react";


function App() {
  const [todos ,setTodos]= useState([{
    title:"go gym",
    desc:"3-4",
    completed:false
  },{
    title:"study",
    desc:"6-4",
    completed:false
  },{
    title:"new ",
    desc:"3-4",
    completed:false
  }]);

  function addTodo(){
    //[1,2]
    // [...todos,] => [1,2,3]
    setTodos([...todos,{
      
        title:"new add",
        desc:"3-4",
      
      
    }])
    todos=[...todos,{

    }]
  }
  return (
    <div>
    <button onclick={addTodo} >ADD a todo</button>
   {/*<Todo title={todos[0].title} desc = {todos[0].desc}/>
   <Todo title={todos[1].title} desc = {todos[2].desc}/>
   */}{
    todos.map(function(todo){
      return <Todo title={todo.title} desc={todo.desc}/>
    })
   }

    </div>
  )}



// component
  function Todo(props){
    return <div>
      <h1>{props.title}</h1>
      <h2>{props.desc}</h2>
    </div>
   
  }


export default App;
