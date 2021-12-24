import React, { useState } from 'react';
import Content from './Content';
import Sidebar from './Sidebar';
import {MainContext} from './contexts/MainContext'
import { BrowserRouter } from 'react-router-dom';
import Portal from './Portal';

const App = ()=>{

    const [showMenu , setShowMenu] = useState(false);

    return (
        <BrowserRouter>
            <div>
                <MainContext.Provider value={{showMenu , setShowMenu}}>
                    <Portal/>
                    <Sidebar/>
                    <Content/>            
                </MainContext.Provider>
            </div>
        </BrowserRouter>
    ) 
}


export default App;
