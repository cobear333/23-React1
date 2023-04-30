import React from "react";

function Book01(props){
    return(
        <div>
            <p>이 책의 이름은 {props.name} 입니다.</p>
            <p>이 책은 총 {props.numOfPage}페이지로 이뤄져 있습니다.</p>
        </div>
    );
}

export default Book01