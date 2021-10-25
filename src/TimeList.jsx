import { useContext } from "react";
import Item from "./Item"
import { TestContext } from "./testContext";

const TimeList = (props)=>{
    const context = useContext(TestContext);
    return (
        <div className="main_time_list">
            {context.timeArr.map((c)=>(
                <Item key={Math.random()}>{c}</Item>
            ))}
        </div>
    )
}

export default TimeList;