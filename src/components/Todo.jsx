const Todo = ({ todo, removeTodo, completeTodo }) => {
  return (
    <div>
      <div
        className="todo"
        key={todo.id}
        style={{ opacity: todo.isCompleted ? 0.5 : 1 }}
      >
        <div className="content">
          <p
            className="todo-text"
            style={{
              textDecoration: todo.isCompleted ? "line-through" : "none",
            }}
          >
            {todo.text}
          </p>
          <p className="category">({todo.category})</p>
        </div>
        <div>
          <button className="complete" onClick={() => completeTodo(todo.id)}>
            {todo.isCompleted ? "Desfazer" : "Completar"}
          </button>
          <button className="remove" onClick={() => removeTodo(todo.id)}>
            x
          </button>
        </div>
      </div>
    </div>
  );
};

export { Todo };
