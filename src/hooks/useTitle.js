import { useEffect } from "react";

const useTitle = (title)=>{
    useEffect(()=>{
        document.title = `پروژه شخصی من | ${title}`
    })
}
export default useTitle;