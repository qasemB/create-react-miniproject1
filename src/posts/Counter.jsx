import React, { useState } from 'react';

const Counter = (MainComponent , number)=>{




    const NewComponent = (props)=>{
        const [count , setCount] = useState(0);

        const handleIncreaseCount = ()=>{
            setCount(count + number);
        }
        return (
            <MainComponent {...props} count={count} handleIncreaseCount={handleIncreaseCount}/>
        )
    }
    return NewComponent





}

export default Counter