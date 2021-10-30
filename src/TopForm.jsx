import React from 'react';

const TopForm = ()=>{
    return(
        <>
            <h4 className="text-center text-info text_shdow">به کدیاد خوش اومدید</h4>
            <form>
                <div className="form-group d-flex">
                    <input type="text" className="form-control" />
                    <button type="submit" className="btn btn-success me-1">ثبت</button>
                </div>
            </form>
        </>
    )
}

export default TopForm;