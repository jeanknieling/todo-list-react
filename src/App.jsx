import { useState } from "react";
import "./App.css";
import Filter from "./components/Filter";
import { Search } from "./components/Search";
import { Todo } from "./components/Todo";
import { TodoForm } from "./components/Todo-Form";

function App() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("@todoList")) || []
  );

  function addTodo(text, category) {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false,
      },
    ];

    setTodos(newTodos);

    const jsonData = JSON.stringify([...newTodos]);

    localStorage.setItem("@todoList", jsonData);
  }

  function removeTodo(id) {
    const newTodosList = [...todos];

    const filteredTodosList = newTodosList.filter((todo) => todo.id !== id);

    setTodos(filteredTodosList);

    const jsonData = JSON.stringify([...filteredTodosList]);

    localStorage.setItem("@todoList", jsonData);
  }

  const completeTodo = (id) => {
    const newTodos = [...todos];

    newTodos.map((todo) => {
      todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo;
    });

    setTodos(newTodos);

    const jsonData = JSON.stringify([...newTodos]);

    localStorage.setItem("@todoList", jsonData);
  };

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("asc");

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
      <div className="todo-list">
        {todos.length === 0 ? (
          <p
            style={{
              fontWeight: 600,
            }}
          >
            Nenhuma tarefa foi criada!
          </p>
        ) : (
          todos
            .filter((todo) =>
              filter === "all"
                ? todos
                : filter === "completed"
                ? todo.isCompleted
                : !todo.isCompleted
            )
            .filter((todo) =>
              todo.text.toLowerCase().includes(search.toLowerCase())
            )
            .sort((a, b) =>
              sort === "asc"
                ? a.text.localeCompare(b.text)
                : b.text.localeCompare(a.text)
            )
            .map((todo) => (
              <Todo
                key={todo.id}
                todo={todo}
                removeTodo={removeTodo}
                completeTodo={completeTodo}
              />
            ))
        )}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
