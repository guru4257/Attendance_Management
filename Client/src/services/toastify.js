import { toast } from "react-toastify";
export const notify = (message,type)=>{

    if(type ==='success'){
        toast.success(`${message}`,{
            position:toast.POSITION.TOP_RIGHT
        })
    }else if(type === 'error'){

        toast.error(`${message}`,{

            position:toast.POSITION.TOP_RIGHT
        })
    }else if(type === 'warning'){

        toast.warning(`${message}`,{
            position:toast.POSITION.TOP_RIGHT
        })
    }else if(type === 'info'){

        toast.info(`${message}`,{
            position:toast.POSITION.TOP_RIGHT
        })
    }
}