import React from "react";
import Book01 from "./Book01";

const books = [
    {
        id: 1,
        name: "처음만난 리액트",
        numOfPage: 300,
    },
    {
        id: 2,
        name: "소플의 파이썬",
        numOfPage: 400,
    },
]

function Library01(props){
    return(
        <div>
            {books.map((book) => {
                return(
                    <Book01 key={book.id} name={book.name} numOfPage={book.numOfPage} />
                );
            })}
        </div>
    );
}

export default Library01