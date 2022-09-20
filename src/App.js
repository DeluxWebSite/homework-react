import './App.css';
import React, { useState, useEffect } from "react";


import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList, ListChildComponentProps } from 'react-window';


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
  }, [messageList]);

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

  function renderRow(props: ListChildComponentProps) {
    const { index, style } = props;

    return (
      <ListItem style={style} key={index} component="div" disablePadding>
        <ListItemButton>
          <ListItemText primary={`Item ${index + 1}`} />
        </ListItemButton>
      </ListItem>
    );
  }

  return (
    <Box sx={{ display: 'flex' }} >
      <Box
        sx={{ width: '100%', height: 400, maxWidth: 360, bgcolor: 'background.paper' }}
      >
        <FixedSizeList
          height={400}
          width={300}
          itemSize={46}
          itemCount={10}
          overscanCount={5}
        >
          {renderRow}
        </FixedSizeList>
      </Box>
      <Box>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          alignItems: 'center',
          width: 400,
          height: 200,
          backgroundColor: 'primary.dark',
          '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],
          },
        }} component="form" noValidate
          autoComplete="off" onSubmit={handlerSubmit} >
          <TextField label="author" color="secondary" focused value={author} onChange={(e) => setAuthor(e.target.value)} />
          <TextField label="message" color="secondary" value={text} onChange={(e) => setText(e.target.value)} />
          <Button variant="contained" color="secondary" type='submit' endIcon={<SendIcon />} >ОТправить сообщение</Button>
        </Box>
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
      </Box>

    </Box >

  );
}

export default App;
