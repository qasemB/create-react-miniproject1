import React, { useMemo, useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const [countTwo, setCountTwo] = useState(10);
    
    const incrementOne = ()=>{
        setCount(count + 1)
    }

    const incrementTwo = ()=>{
        setCountTwo(countTwo + 10)
    }

    const isEven = useMemo(()=>{
        console.log(count);
        let i = 0
        while (i < 3000) {
            console.log(i);
            i++
        }
        return count % 2 === 0
    } , [count])


    return (
        <div className='text-center my-3'>
            <h5 className='text-center'>{isEven ? "زوج" : "فرد"}</h5>
            <button className='btn btn-success' onClick={incrementOne}>{`count-one : ${count}`} </button>
            <br />
            <br />
            <button className='btn btn-success' onClick={incrementTwo}>count-two : {countTwo}</button>
        </div>
    );
}

export default Counter;
