import React from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import List from './components/List';
function App() {
  const [list, setList] = React.useState([]);
  const [isDone, setIsDone] = React.useState(false);

  function add(value) {
    const element = {
      id: Math.random(),
      title: value,
      isChecked: false
    };
    setList([...list, element]);
  }
  function remove(id) {
    setList([...list.filter(item => item.id !== id)]);
  }

  function changeChecked(id, isChecked) {
    setList([
      ...list.map(function (item) {
        if (item.id === id) {
          return { ...item, isChecked };
        }
        return item;
      })
    ]);
  }

  console.log(list);

  // function

  return (
    <>
      <div className="wrapper">
        <Header />
        <Form handleSubmit={value => add(value)} />
        <div>
          <label>
            <input checked={isDone} onChange={() => setIsDone(!isDone)} type={'checkbox'} />
          </label>
        </div>
        <List list={list} deleteHandler={remove} checkedHandler={changeChecked} />
      </div>
    </>
  );
}

export default App;
