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
      <section className="form-container">
        <form onSubmit={submit}>
          <input id="todo-input" type="text" placeholder="Add a task"/>
          <button className="add-todo">Add Todo</button>
        </form>
        <button className="clear-completed" onClick={()=> dispatch({type: "CLEAR_COMPLETED"})}>Clear Completed</button>
      </section>
      <section className="todos">
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
      </section>
    </div>
  );
}

export default App;
