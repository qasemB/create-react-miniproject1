import React, { useContext } from 'react';
import { taskContext } from './taskContext';

const TaskItems = ()=>{
    const {taskItems , setTaskItems} = useContext(taskContext);
    return (
        <ul className="list-group m-0 p-0 mt-2">
            {
                taskItems.map(t=>(
                    <li 
                    className={
                        `list-group-item d-flex justify-content-between 
                        ${t.done ? "list-group-item-success" : "" }`
                        }>
                       {t.title}
                        <span>
                            {
                                t.done ? (
                                    <i className="me-3 pointer fas fa-times text-warning transition_200 text_hover_shadow"></i>
                                ) : (
                                    <i className="me-3 pointer fas fa-check text-success transition_200 text_hover_shadow"></i>
                                )
                            }  
                            <i className="me-3 pointer fas fa-trash text-danger transition_200 text_hover_shadow"></i>
                        </span>
                    </li>
                ))
            }



        </ul>    
    )
}

export default TaskItems;