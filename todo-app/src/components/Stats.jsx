import React from 'react';
import "./Stats.css";


function Stats({ todos }) {
  const total = todos.length;
  const active = todos.filter(task => !task.completed).length;
  const completed = todos.filter(task => task.completed).length;

  return (
    <div className='stats'>
      <p>Всего: {total} | Активные: {active} | Завершённые: {completed}</p>
    </div>
  );
}

export default Stats;