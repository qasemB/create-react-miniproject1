import React from 'react';

const TaskItems = ()=>{
    return (
        <ul className="list-group m-0 p-0 mt-2">
            <li className="list-group-item d-flex justify-content-between">
                کار شماره 1
                <span>
                    <i className="me-3 pointer fas fa-check text-success transition_200 text_hover_shadow"></i>
                    <i className="me-3 pointer fas fa-times text-warning transition_200 text_hover_shadow"></i>
                    <i className="me-3 pointer fas fa-trash text-danger transition_200 text_hover_shadow"></i>
                </span>
            </li>

            <li className="list-group-item d-flex justify-content-between list-group-item-success">
                کار شماره 2
                <span>
                    <i className="me-3 pointer fas fa-check text-success transition_200 text_hover_shadow"></i>
                    <i className="me-3 pointer fas fa-times text-warning transition_200 text_hover_shadow"></i>
                    <i className="me-3 pointer fas fa-trash text-danger transition_200 text_hover_shadow"></i>
                </span>
            </li>

        </ul>    
    )
}

export default TaskItems;