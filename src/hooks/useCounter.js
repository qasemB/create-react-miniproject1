import { useState } from "react"

const useCounter = (init , value)=>{
    const [count , setCount] = useState(init);

    const increment = ()=>{
        setCount(count + value)
    }
    const decrement = ()=>{
        setCount(count - value)
    }
    const reset = ()=>{
        setCount(init)
    }

    return[count , increment , decrement , reset]

}

export default useCounter