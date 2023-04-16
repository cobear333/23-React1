import React from "react";
import Book2 from "./Book2";

function Library2(props){
    return(
        <div>
            <Book2 name="소플의 리액트" numOfPage="300" />
            <Book2 name="처음만난 파이썬" numOfPage="400" />
        </div>
    );
}

export default Library2