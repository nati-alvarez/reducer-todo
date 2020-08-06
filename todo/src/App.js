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
      {state.todos.map(todo=>{
        return (
          <div key={todo.id} className="todo">
            {todo.item}
          </div>
        )
      })}
    </div>
  );
}

export default App;
