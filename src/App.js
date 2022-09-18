import './App.css';
import React, { useState, useRef } from "react";



function App() {
  const [state, setState] = useState(0);
  const ref1 = useRef();
  const ref2 = useRef();
  const inputClear = (e) => {
    ref1.current.value = ''
    ref2.current.value = ''
  }
  const [obj, setObj] = useState([]);
  const [messageList, setMessageList] = useState([]);

  function change(name, e) {
    setObj({ ...obj, [name]: e.target.value });
  }
  function addMessages() {
    setMessageList([...messageList, obj]);
    inputClear();
  }

  return (
    <div className='App' >
      <input className='input-style' type="text" name="author" onChange={(e) => change('author', e)} placeholder='author' ref={ref1} />
      <input className='input-style' type="text" name='message' onChange={(e) => change('message', e)} placeholder='message' ref={ref2} />
      <button className='btn-input-style' onClick={addMessages} >ОТправить сообщение</button>
      <hr />
      {
        messageList.map((item) => {
          return (
            <div className="homework-style">
              <p>Author : {item.author}</p>
              <p>Message : {item.message}</p><br />
            </div>
          )
        })
      }
      <hr />
      <div className='counter'>
        <button onClick={() => setState(state - 1)}>-</button>
        <h4>{state}</h4>
        <button onClick={() => setState(state + 1)}>+</button>
        <button onClick={(() => setState(0))}>Reset</button>
      </div>
    </div >
  );
}

export default App;
