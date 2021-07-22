import { useEffect, useState } from "react";

const useFetch=(url)=>{
const [dbdata, setDbdata] = useState(null);
const [loading, setLoding] = useState(true);
const [errMsg,setErrMsg]=useState(null)

useEffect(() => {
    const abortCont=new AbortController()

setTimeout(()=>{
  fetch(url,{signal:abortCont.signal})
  .then(res=> {
    if(!res.ok)
    {
      throw Error("url connected Data not recived")
    }
    return res.json();
  })
  .then(data=>{
    setDbdata(data);
     setLoding(false);
     setErrMsg(false);
    })
    .catch(err=>{
        if(err.name==="AbortError"){
            console.log("fetch aborted")
            setErrMsg(err.message)   
        }
        else{
      setLoding(false);
      setErrMsg(err.message)   
        } 
    })
},10);  
return ()=>abortCont.abort();
}, [url]);
return {dbdata,loading,errMsg};
}
export default useFetch;