import React, {useReducer} from 'react';
import {reducer, initialState} from "./reducers";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
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
