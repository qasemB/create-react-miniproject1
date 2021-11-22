import React, { useContext } from 'react';
import { MainContext } from './contexts/MainContext';
import style from './style.module.css';

const Sidebar = ()=>{

    const {showMenu,setShowMenu} = useContext(MainContext)

    return (
        <div className={`${style.sidebar_section} bg-secondary`} style={showMenu ? {right:0} : {}}>
            <ul className={`${style.sidebar_list} m-0 p-0`}>
                <li className={style.sidebar_avatar}>
                    <img src="/assets/images/user2.jpg" alt="" />
                </li>
                <li>
                    <a href="/">کاربران</a>
                </li>
                <li>
                    <a href="/">پست ها</a>
                </li>
                <li>
                    <a href="/">گالری</a>
                </li>
                <li>
                    <a href="/">کارها</a>
                </li>
            </ul>
        </div>
    )

}

export default Sidebar;