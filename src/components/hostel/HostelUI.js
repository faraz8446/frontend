import React from 'react'
import './HostelUI.css'
import { useEffect,useState } from 'react'
import HostelDetails from './HostelDetails'
import axios from 'axios';


export default function HostelUI() {
    
    const [datas,setDatas]=useState([]);
    

    useEffect(()=>{

        axios.get('https://askcui-985f2-default-rtdb.firebaseio.com/hostelList.json')
        .then((resp)=>{
          console.log(resp.data)
              let user=resp.data
              let userData=[]
              for(let key in user){
                  userData.push({...user[key], id:key})
                }
            
              setDatas(userData)
        //   })
         
        })
},[])

  return (
<>
<h1 className='text-center heading mb-5'>Hostels</h1>

{
    datas.map((udata,index)=>{
        
        return (
        <HostelDetails key={index} {...udata}  />
       )
    }

    )
}

</>

  )
}
