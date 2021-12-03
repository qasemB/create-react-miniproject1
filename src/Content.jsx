import React, { useContext, useState } from 'react';
import { Route , Routes , Navigate} from 'react-router-dom';
import { MainContext } from './contexts/MainContext';
import Gallery from './gallery/Gallery';
import Posts from './posts/Posts';
import style from './style.module.css'
import Todos from './todos/Todos';
import AddUser from './users/AddUser';
import EditDesc from './users/EditDesc';
import Users from './users/Users';

const Content = ()=>{

    const {showMenu,setShowMenu} = useContext(MainContext)
    const [isUser , setIsUser] = useState(false);

    const handleShowMenu = (event)=>{
        event.stopPropagation()
        setShowMenu(!showMenu)
        console.log(showMenu);
    }

    return (
        <div className={style.content_section} onClick={()=>{setShowMenu(false)}}>
            <i className={`${style.menu_button} fas fa-bars text-dark m-2 pointer d-md-none`} 
            onClick={handleShowMenu}
            ></i>
                <Routes>
                    {/* <Route path="/" element={<Navigate replace to="/gallery"/>} /> */}
                    <Route path="/user" element={<Users/>} />
                    <Route path="/user/add" element={<AddUser/>}>
                        <Route path=":userId"/>
                    </Route>
                    <Route path="/post" element={<Posts/>} />
                    <Route path="/gallery" element={<Gallery/>} />
                    <Route path="/todo" element={<Todos/>} />
                    <Route path="*" element={<Users/>} />
                </Routes>
            
        </div>
    )

}

export default Content;