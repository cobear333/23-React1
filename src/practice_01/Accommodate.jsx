import React,{useState, useEffect} from "react";
import useCount from "./useCount";

const MAX_CAPACITY = 10;
const MIN_CAPACITY = 0; 
function Accommodate(props){
    const [isFull, setIsFull] = useState(false);
    const [isEmpty, setIsEmpty] = useState(true);
    const [count, increaseCount, decreaseCount] = useCount(0);

    useEffect(()=>{
        console.log("===========");
        console.log("useEffect is called");
        console.log(`isEmpty : ${isEmpty}`);
        console.log(`isFull : ${isFull}`);
        console.log("===========");
    })

    useEffect(() => {
        setIsFull(count >= MAX_CAPACITY)
        setIsEmpty(count <= MIN_CAPACITY)
    },[count])

    return(
        <div>
            <p>총 {count}명 수용했습니다.</p>
            <br/>
            <button onClick={increaseCount} disabled={isFull}>
                입장
            </button>
            <button onClick={decreaseCount} disabled={isEmpty}>
                퇴장
            </button>
            {isFull && <p style={{color:"red"}}> 정원이 꽉 찼습니다.</p>}
            {isEmpty && <p style={{color:"blue"}}> 아무도 없습니다.</p>}
        </div>
    );

}

export default Accommodate