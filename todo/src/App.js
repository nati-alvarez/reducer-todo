import React, {useReducer} from 'react';
import {reducer, initialState} from "./reducers";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const submit = e => {
    e.preventDefault();

    const newTodo = {
      id: new Date(),
      item: document.querySelector("#todo-input").value,
      completed: false
    }
    
    dispatch({type: "ADD_TODO", payload: newTodo});
    
    document.querySelector("#todo-input").value = "";
  }

  return (
    <div className="App">
      <form onSubmit={submit}>
        <input id="todo-input" type="text" placeholder="Add a task"/>
        <button>Add Todo</button>
      </form>
      <button onClick={()=> dispatch({type: "CLEAR_COMPLETED"})}>Clear Completed</button>
      {state.todos.map(todo=>{
        return (
          <div 
            onClick={()=> dispatch({type: "TOGGLE_COMPLETE", payload: {id: todo.id}})} 
            key={todo.id} 
            className={"todo " + (todo.completed? "completed": "") }
          >
            {todo.item}
          </div>
        )
      })}
    </div>
  );
}

export default App;
