import { useState } from 'react';
import "./Todoitem.css";


const TodoItem = ({ todo, onToggle, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleDoubleClick = () => {
    setIsEditing(true);
    setEditText(todo.text);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = editText.trim();
    if (text) {
      onUpdate(todo.id, text);
    }
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setEditText(todo.text);
      setIsEditing(false);
    }
  };

  if (isEditing) {
    return (
      <div className="todo-item editing">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onBlur={handleSubmit}
            onKeyDown={handleKeyDown}
            className="edit-input"
            autoFocus
          />
        </form>
      </div>
    );
  }

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="todo-checkbox"
      />
      <span
        onDoubleClick={handleDoubleClick}
        className="todo-text"
      >
        {todo.text}
      </span>
      <button
        onClick={() => onDelete(todo.id)}
        className="delete-button"       
      >
        Удалить
      </button>
    </div>
  );
};

export default TodoItem;