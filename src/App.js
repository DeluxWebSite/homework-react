import './App.css';
import React, { useState, useEffect } from "react";



function App() {
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');
  const [messageList, setMessageList] = useState([]);

  const handlerSubmit = (e) => {
    e.preventDefault();
    setMessageList(prevState => [...prevState, {
      id: givLastId(prevState),
      author: author,
      text: text
    }])
    setAuthor('');
    setText('');
  }

  function givLastId(array) {
    return array.length ? array[array.length - 1].id + 1 : 0
  }

  useEffect(() => {
    setTimeout(() => {
      botAnswer()
    }, 3000)
  }, [messageList])

  function botAnswer() {
    const lastAuthor = messageList[messageList.length - 1];
    if (lastAuthor && lastAuthor.author) {
      setMessageList(prevState => [...prevState, {
        id: givLastId(prevState),
        text: `Сообщение автора ${lastAuthor.author} отправлено`
      }
      ])
    }
  }

  return (
    <div className='App' >
      <hr />
      <form action="#" onSubmit={handlerSubmit}>
        <input value={author} onChange={(e) => setAuthor(e.target.value)} placeholder='author' />
        <input value={text} onChange={(e) => setText(e.target.value)} placeholder='message' />
        <button type='submit' >ОТправить сообщение</button>
      </form>
      <hr />
      {
        messageList.map((message) => {
          return (
            <div key={message.id} >
              <p>Author : {message.author}</p>
              <p>Message : {message.text}</p><br />
            </div >
          )
        })
      }

    </div >
  );
}

export default App;
