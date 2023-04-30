import React, { useEffect, useState, useMemo } from "react";

function UserLocation(props){
    const [number, setNumber] = useState(0);
    const [isKorea, setIsKorea] = useState(true);

    const location = useMemo(() => {
        return{
            country: isKorea ? '한국' : '일본'
        }
    }, [isKorea])

    useEffect(() => {
        console.log('useEffect.... 호출 Location');
    }, [location])

    useEffect(() => {
        console.log('number useEffect 호출');
    },[number])

    return(
        <div>
            <h2>하루에 몇 끼 먹어요?</h2>
            <input type="number" value={number} onChange={(e) => setNumber(e.target.value)}/>
            
            <h2>어느 나라에 있어요? </h2>
            <p>나라: {location.country}</p>
            <button onClick={() => setIsKorea(!isKorea)}>Update</button>
        </div>
    )
}

export default UserLocation

