import swal from "sweetalert";

export const Confirm = (message)=>{
    return swal({
        title: "حذف رکورد !",
        text: message,
        icon: "warning",
        buttons: ["خیر" , "بله"],
        dangerMode: true,
    })
}

export const Alert = (message , icon)=>{
    return swal(message, {
             icon: icon,
             buttons: "متوجه شدم",            
         });
}