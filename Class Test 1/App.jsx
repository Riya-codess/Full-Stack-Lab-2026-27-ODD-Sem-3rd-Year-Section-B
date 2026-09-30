import Counter from "./Counter";
import TodoList from "./TodoList";
import LoginToggle from "./LoginToggle";
import SearchFilter from "./SearchFilter";
import Stopwatch from "./Stopwatch";

function App() {
  return (
    <div>
      <h1>Full Stack Web Development</h1>
      <h2>Frontend Practical Test - Class Test 1</h2>

      <hr />

      <h2>Q1. Counter</h2>
      <Counter />

      <hr />

      <h2>Q2. Todo List</h2>
      <TodoList />

      <hr />

      <h2>Q3. Login Toggle</h2>
      <LoginToggle />

      <hr />

      <h2>Q4. Live Search Filter</h2>
      <SearchFilter />

      <hr />

      <h2>Q5. Stopwatch</h2>
      <Stopwatch />
    </div>
  );
}

export default App;