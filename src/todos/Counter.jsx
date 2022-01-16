import React from 'react';
import useCounter from '../hooks/useCounter';

const Counter = () => {

    const [count1 , increment1 , decrement1 , reset1] = useCounter(1 , 3)
    const [count2 , increment2 , decrement2 , reset2] = useCounter(5 , 10)

    return (
        <div>
            <div className='text-center my-3'>
                <h3 className='text-center text-info'>{count1}</h3>
                <button onClick={increment1} className='btn btn-success'>افزایش</button>
                <button onClick={decrement1} className='btn btn-danger'>کاهش</button>
                <button onClick={reset1} className='btn btn-secondary'>ریست</button>
            </div>
            <div className='text-center my-3'>
                <h3 className='text-center text-info'>{count2}</h3>
                <button onClick={increment2} className='btn btn-success'>افزایش</button>
                <button onClick={decrement2} className='btn btn-danger'>کاهش</button>
                <button onClick={reset2} className='btn btn-secondary'>ریست</button>
            </div>
        </div>
    );
}

export default Counter;
