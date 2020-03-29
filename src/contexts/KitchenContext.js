import React, { useState, createContext } from 'react';

export const KitchenContext = createContext();

const KitchenContextProvider = (props) => {
  const [todo, setTodo] = useState([
    {
      id: 3122,
      name: 'Ilyas',
      table: 'C01',
      orders: [
        { id: 1, name: 'Banana Donut', count: 2, isDone: true },
        { id: 2, name: 'Banana Split', count: 3, isDone: false },
        { id: 3, name: 'Banana Mix', count: 4, isDone: true },
        { id: 4, name: 'Banana Xtra', count: 2, isDone: true }
      ]
    },
    {
      id: 3123,
      name: 'Ilyas',
      table: 'C01',
      orders: [
        { id: 1, name: 'Banana Donut', count: 2 },
        { id: 2, name: 'Banana Split', count: 3 },
        { id: 3, name: 'Banana Mix', count: 4 },
        { id: 4, name: 'Banana Xtra', count: 2 }
      ]
    },
    {
      id: 3124,
      name: 'Ilyas',
      table: 'C01',
      orders: [
        { id: 1, name: 'Banana Donut', count: 2 },
        { id: 2, name: 'Banana Split', count: 3 },
        { id: 3, name: 'Banana Mix', count: 4 },
        { id: 4, name: 'Banana Xtra', count: 2 }
      ]
    },
  ]);
  const [queue, setQueue] = useState([
    {
      id: 3142,
      name: 'Ilyas',
      table: 'C01',
      orders: [
        { id: 1, name: 'Banana Donut', count: 2 },
        { id: 2, name: 'Banana Split', count: 3 },
        { id: 3, name: 'Banana Mix', count: 4 },
        { id: 4, name: 'Banana Xtra', count: 2 }
      ]
    },
    {
      id: 3152,
      name: 'Ilyas',
      table: 'C01',
      orders: [
        { id: 1, name: 'Banana Donut', count: 2 },
        { id: 2, name: 'Banana Split', count: 3 },
        { id: 3, name: 'Banana Mix', count: 4 },
        { id: 4, name: 'Banana Xtra', count: 2 }
      ]
    },
    {
      id: 3172,
      name: 'Ilyas',
      table: 'C01',
      orders: [
        { id: 1, name: 'Banana Donut', count: 2 },
        { id: 2, name: 'Banana Split', count: 3 },
        { id: 3, name: 'Banana Mix', count: 4 },
        { id: 4, name: 'Banana Xtra', count: 2 }
      ]
    },
  ]);

  const deleteTodo = (id) => {
    setTodo([...todo.filter(e=>e.id !== id)])  
  }
  const deleteQueue = (id) => {
    setQueue([...queue.filter(e=>e.id !== id)])  
  }
  const addTodo = (id) => {
    setTodo([...todo, queue.find(e=>e.id === id)])
    deleteQueue(id)
  }
  const passedObj = {
    todo,
    queue,
    setQueue,
    setTodo,
    addTodo,
    deleteQueue,
    deleteTodo
  }
  return (
    <KitchenContext.Provider value={passedObj}>
      {props.children}
    </KitchenContext.Provider>
  );
}
 
export default KitchenContextProvider;