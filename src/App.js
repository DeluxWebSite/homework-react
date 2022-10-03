import './App.css';
import React, { useState } from "react";
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import ChatsPage from './pages/ChatsPage';

import NotFoundPage from './pages/NotFoundPage';
import { BrowserRouter } from 'react-router-dom';
import Messages from './pages/Messages';
import { ThemeContext, themes } from './components/Context';

import { store } from "../src/redux/reducers/configureStore"


function App() {
  const [theme, setTheme] = useState(themes.light);
  const toggleTheme = () => {
    setTheme(prevState => prevState === themes.light ? themes.dark : themes.light);
  }
  return (
    <Provider store={store}>
      <ThemeContext.Provider value={theme}>
        <button onClick={toggleTheme}>Поменять тему</button>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Layout />} >
              <Route index element={<HomePage />} />
              <Route exact path="profile" element={<ProfilePage />} />
              <Route exact path="chats" element={<ChatsPage />} />
              <Route exact path='messages/:id' element={<Messages />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </Provider>
  )
}

export default App;
