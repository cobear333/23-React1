import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from "react-dom/client";


import Library from './chapter_03/Library';
import Library2 from './chapter_03/Library2';
import Clock from './chapter_04/Clock';
import ConfirmDialog from './chapter_04/ConfirmDialog';
import Tick from './chapter_04/Tick'
import CommentList from './practice_05/CommentList';
import NotificationList from './practice_06/NotificationList';
import Accommodate from './chapter_07/Accommodate';


const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
      <NotificationList />
  </StrictMode>
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
