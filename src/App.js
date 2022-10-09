import './App.css';
import React, { useEffect } from "react";
// import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { useState } from 'react';
// import Layout from './components/Layout';
// import HomePage from './pages/HomePage';
// import ProfilePage from './pages/ProfilePage';
// import ChatsPage from './pages/ChatsPage';

// import NotFoundPage from './pages/NotFoundPage';
// import { BrowserRouter } from 'react-router-dom';
// import Messages from './pages/Messages';
// import { ThemeContext, themes } from './components/Context';

import { getDate } from './redux/reducers/reducer';
import './store/actionTypes';
import { getPostsSelector, getPostsLoading, getPostsError } from './store/selectors';

function App() {

  const posts = useSelector(getPostsSelector);
  const loading = useSelector(getPostsLoading);
  const error = useSelector(getPostsError);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDate());
  }, []);

  // const [theme, setTheme] = useState(themes.light);
  // const toggleTheme = () => {
  //   setTheme(prevState => prevState === themes.light ? themes.dark : themes.light);
  // }

  if (loading) {
    return (
      <div>
        ИДЕТ ЗАГРУЗКА...
      </div>
    )
  }
  if (error) {
    return (
      <div >
        Произошла ошибка
      </div>
    )
  }
  return (
    // <ThemeContext.Provider value={theme}>
    //   <button onClick={toggleTheme}>Поменять тему</button>
    //   <BrowserRouter>
    //     <Routes>
    //       <Route exact path="/" element={<Layout />} >
    //         <Route index element={<HomePage />} />
    //         <Route exact path="profile" element={<ProfilePage />} />
    //         <Route exact path="chats" element={<ChatsPage />} />
    //         <Route exact path='messages/:id' element={<Messages />} />
    //         <Route path="*" element={<NotFoundPage />} />
    //       </Route>
    //     </Routes>
    //   </BrowserRouter>
    // </ThemeContext.Provider >

    <>
      {posts?.map((posts) => {
        return (
          <div key={posts.id} >
            {posts.title}
          </div>
        )
      })
      }
    </>
  )
}

export default App;
