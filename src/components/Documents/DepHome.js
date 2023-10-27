import React,{useState} from 'react'
import DepData from './Service/Departments'
import Main from './DepMain'


const Home = () => {
  const [initData,setinitData]= useState(DepData);



  return (
    <>
  
      <Main initData={initData} />
      

    </>
  )
}

export default Home