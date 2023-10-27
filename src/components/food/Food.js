import React from 'react'
import './food.css'
import { useEffect,useState } from 'react'
import axios from 'axios';
import FoodDetails from './FoodDetails';

export default function Food() {


    const [datas,setDatas]=useState([]);

    useEffect(()=>{

        axios.get('https://askcui-985f2-default-rtdb.firebaseio.com/foodList.json')
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
    <div>
      <h1 className='text-center heading mb-5'>FOOD POINTS</h1>
      {
    datas.map((udata,index)=>{
        
        return (
          // <div className='row'>
            // <div className='col-md-4'>
            <FoodDetails key={index} {...udata}  />
            // </div>

          //  </div> 
        
       )
    }

    )
}
    </div>
  )
}
