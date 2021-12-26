import React, { useState } from 'react';

const Counter = MainComponent=>{
    const NewComponent = ()=>{
        const [count , setCount] = useState(0);

        const handleIncreaseCount = ()=>{
            setCount(count + 1);
        }
        return (
            <MainComponent count={count} handleIncreaseCount={handleIncreaseCount}/>
        )
    }
    return NewComponent
}

export default Counter