import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getUsers, receiveUserError, receiveUserResponse, sendUserRequest } from '../redux/user/userActions';

const Usercomponent = () => {
    const {loading , data , error} = useSelector(state=>state)
    const dispatch = useDispatch()

    const handleGetUsers = ()=>{
        dispatch(getUsers())
    }

    return (
        <div>
            <div className='text-center mt-5'>
                <button className='btn btn-success' onClick={handleGetUsers}>دریافت کاربران</button>
            </div>
            {loading ? (
                <div className='text-center text-secondary mt-5'>
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : data.length > 0 ? (
                <ul className='text-center'>
                    {data.map(u=>(
                        <li key={u.id}>{u.username}</li>
                    ))}
                </ul>
            ) : error ? (
                <h4 className='text-center text-danger mt-5'>{error}</h4>
            ) : (
                <h4 className='text-center text-dark mt-5'>کاربران را دریافت کنید</h4>
            )}
        </div>
    );
}

export default Usercomponent;
