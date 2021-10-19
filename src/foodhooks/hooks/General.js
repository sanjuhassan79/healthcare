import { useEffect,useState } from "react"

const useGeneralServices=()=>{

    const [Service,setService]=useState([])
// console.log(Service);
    useEffect(() => {
        fetch('/GeneralServices.json')
        .then(res=>res.json())
        .then(data=>setService(data))
    }, []);

    return [Service,setService]
}

export default useGeneralServices;    