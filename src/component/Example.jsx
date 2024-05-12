import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../redux/slices/counter/index'
import { fetchTodos } from "../redux/slices/todo";

const Example = () => {
  const count = useSelector((state) => state.counter.value)
  const state = useSelector((state) => state);
  const dispatch = useDispatch()

  return (
    <div>
      <div className="counter">
        <h1>counter : {count}</h1>
        <div style={{ display: "flex", gap: "1rem" }}>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      </div>
      <div className="todo-list">
          <button onClick={(e) => dispatch(fetchTodos())}>Fetch Todos</button>
          {state.todo.data && state.todo.data.map((e) => <li>{e.title}</li>)}
      </div>
    </div>
  )
}

export default Example