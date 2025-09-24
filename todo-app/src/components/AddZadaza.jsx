import { useState } from 'react';
import "./AddZadaza.css";

const AddTodo = ({ onAdd }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = inputValue.trim();
    
    if (text) {
      onAdd(text);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo-form">
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Добавить новую задачу..."
          className="todo-input"
        />
        <button type="submit" className="add-btn">
          Добавить
        </button>
      </div>
    </form>
  );
};

export default AddTodo;