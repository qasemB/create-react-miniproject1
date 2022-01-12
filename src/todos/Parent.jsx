import React, { useCallback, useState } from 'react';
import Countbox from './CountBox';
import Countbutton from './CountButton';
import Title from './Title';

const Parent = () => {
    const [title,setTitle] = useState("سلام به دوستان کدیادی")
    const [count,setCount] = useState(0)
    const [count2,setCount2] = useState(5)

    const hendleSetFirstCount = useCallback(()=>{
        setCount(count+1)
    } , [count])
    const hendleSetSecondCount = useCallback(()=>{
        setCount2(count2+1)
    } , [count2])

    return (
        <div>
            <Title title={title}/>
            <Countbox title="مجموعه1" count={count}/>
            <Countbutton title="مجموعه1" handleClick={hendleSetFirstCount}/>  



            <Countbox title="مجموعه2" count={count2}/>
            <Countbutton title="مجموعه2" handleClick={hendleSetSecondCount}/>            
        </div>
    );
}

export default Parent;
