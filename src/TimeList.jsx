import Item from "./Item"

const TimeList = (props)=>{
    return (
        <div className="main_time_list">
            {props.children.map((c)=>(
                <Item key={Math.random()}>{c}</Item>
            ))}
        </div>
    )
}

export default TimeList;