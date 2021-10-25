import React , {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import './style.css'

import Hello from './Hello';
import Timer from './Timer';
import TimeList from './TimeList';
import { TestContext } from './testContext';

const App = ()=>{
    const [title , setTitle] = useState("سلام دوستان عزیزم");
    const [isLight , setIsLight] = useState(false);
    const [timeArr , setTimeArr] = useState(["00 : 05 : 12" , "00 : 06 : 32"]);
    
    useEffect(()=>{
        console.log("useEffect");
        return ()=>{
            
        }
    },[isLight])

    const handleSetIsLight = ()=>{
        setIsLight(!isLight)
    }

    return (
        <TestContext.Provider value={{
            timeArr,
            setTimeArr
            }}>
            <div className="main" style={{background:isLight ? "white" : "black" }}>
                <Hello title={title}/>        
                <Timer 
                isLight={isLight} 
                handleSetIsLight={handleSetIsLight}/>
                <TimeList />
            </div>
        </TestContext.Provider>
    ) 
}


export default App;
