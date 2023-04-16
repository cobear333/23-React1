import React from "react";
import Comment from "./Comment";

const comments = [
    {
        id : 1,
        name: "유재석",
        comment: "리액트 재미있어요",
    },
    {
        id : 2,
        name: "김민경",
        comment: "저도 리액트 배우고 싶어요",
    },
];

function CommentList(props){
    return(
        <div>
            {comments.map((comment) => {
                return(
                    <Comment id={comment.id} name={comment.name} comment={comment.comment}/>
                );
            })}
        </div>
    );
}

export default CommentList