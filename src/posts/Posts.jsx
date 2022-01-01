import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getPostsService } from '../services/PostSErvice';
import style from '../style.module.css'
// import Counter from './Counter';

const Posts = ()=>{

    const [posts , setPosts] = useState([]);
    const navigate = useNavigate();

    const handleSearch = ()=>{}

    const handleDelete = (postId)=>{}

    const getPosts = async ()=>{
        const res = await getPostsService();
        setPosts(res.data);
    }

    useEffect(()=>{
        getPosts();
    } , [])

    return (
        <div className={`${style.item_content} mt-5 p-4 container-fluid`}>
            <h4 className="text-center">مدیریت پست ها</h4>

            <div className="row my-2 mb-4 justify-content-between w-100 mx-0">
                <div className="form-group col-10 col-md-6 col-lg-4">
                    <input type="text" className="form-control shadow" placeholder="جستجو" onChange={handleSearch}/>
                </div>
                <div className="col-2 text-start px-0">
                    <Link to="/post/add">
                        <button className="btn btn-success">
                            <i className="fas fa-plus text-light"></i>
                        </button>
                    </Link>
                </div>
            </div>

            {posts.length ? (
            <table className="table bg-light shadow">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>آی دی کاربر</th>
                        <th>عنوان</th>
                        <th>متن</th>
                        <th>عملیات</th>
                    </tr>
                </thead>
                <tbody>
                   {posts.map(u => (
                    <tr key={u.id}>
                        <td>{u.id}</td>
                        <td>{u.userId}</td>
                        <td>{u.title}</td>
                        <td>{u.body}</td>
                        <td>
                            <i className="fas fa-edit text-warning mx-2 pointer"
                            onClick={()=>navigate(`/posts/add/${u.id}`)}
                            ></i>
                            <i className="fas fa-trash text-danger mx-2 pointer"
                            onClick={()=>handleDelete(u.id)}
                            ></i>
                        </td>
                    </tr>
                   ))}
                </tbody>
            </table>
            ) : (
                <h4 className="text-center text-info">لطفا صبر کنید...</h4>
            )}

            {/* <Counter/> */}
        </div>
    )

}

export default Posts;