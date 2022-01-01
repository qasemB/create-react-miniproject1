import React, { useState } from 'react';

const Counter = () => {

    const [count , setCount] = useState(0);

    const handleIncreaseCount = (num)=>{
        for (let index = 0; index < num; index++) {
            setCount ((prevCount)=>{
                return prevCount + 1
            });            
        }
    }

    return (
        <div className='text-center my-3'>
            <button className='btn btn-success' onClick={()=>handleIncreaseCount(10)}>count: {count}</button>
        </div>
    );
}

export default Counter;
