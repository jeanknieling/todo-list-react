import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!value || !category) return;

    addTodo(value, category);

    setValue("");
    setCategory("");
  }

  return (
    <div className="todo-form">
      <h2>Criar tarefa: </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite o título"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Selecione uma categoria</option>
          <option value="trabalho">Trabalho</option>
          <option value="pessoal">Pessoal</option>
          <option value="estudos">Estudos</option>
        </select>
        <button type="submit">Criar tarefa</button>
      </form>
    </div>
  );
};

export { TodoForm };
