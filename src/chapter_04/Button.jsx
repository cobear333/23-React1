import React from "react";



function Button(props){
    return(
        <div>
            <button className={`bg-${props.color}`}>
                <b>
                    {props.children}
                </b>
            </button>
        </div>
    );
}

export default Button