import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from "react-dom/client";


import Library from './chapter_03/Library';
import Library01 from './practice_03/Library01';
import Clock01 from './practice_04/Clock01';
import Clock from './chapter_04/Clock';
import ConfirmDialog from './chapter_04/ConfirmDialog';
import Tick from './chapter_04/Tick'
import CommentList from './practice_05/CommentList';
import NotificationList from './practice_06/NotificationList';
import Accommodate from './practice_02/Accommodate';
import Counter from './chapter_07/Counter';
import Counter2 from './chapter_07/Counter2';
import UserLocation from './chapter_07/UserLocation';
import TextInputWithFocusButton from './chapter_07/TextInputWithFocusButton';
import ConfirmButton from './chapter_08/ConfirmButton';
import Toolbar from './chapter_09/Toolbar';
import AttendanceBook from './chapter_10/AttendanceBook';
import ProfileCard from './chapter_13/ProfileCard';


const root = createRoot(document.getElementById("root"));

root.render(
    <StrictMode>
        <ProfileCard />
    </StrictMode>
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
