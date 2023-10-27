import React, {useEffect,useState} from "react";
import {useParams,useHistory} from 'react-router-dom'
import './food.css'
import Collapse from 'react-bootstrap/Collapse';

export default function FoodDetails({name,address,contact,method,time,menu}) {

    const [open, setOpen] = useState(false);
    // function getRandomLightColor() {
    //     var letters = '0123456789ABCDEF';
    //     var color = '#';
    //     for (var i = 0; i < 6; i++) {
    //         color += letters[Math.floor(Math.random() * 4)];
    //     }
    //     return color;
    // }

    return (
        <>
    <div class="container">
        {/* <div class="row"> */}
            {/* <div class="col-xs-12 col-sm-6 col-md-4"> */}
     
     
                <div class="image-flip" >
                    <div class="mainflip flip-0">
                      
                        <div class="frontside">
                            <div class="card">
                                <div class="card-body text-center">
                                    <h4 class="card-title">{name}</h4>
                                    <p class="card-text"><b>Address:</b> {address}</p>
                                    <p class="card-text"><b>Contact #</b> {contact}</p>
                                    <p class="card-text"><b>Order Type:</b> {method}</p>
                                    <p class="card-text"><b>Timings:</b> {time}</p>
                                    <p style={{color:'gray'}}><small><i>click and hold to see menu</i></small></p>
                                    <a class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></a>
                                </div>
                            </div>
                        </div>
                       
                        <div class="backside">
                            <div class="card">
                                <div class="card-body text-center mt-4">
                                    <h4 class="card-title">Menu: <br /></h4>
                                    <p class="card-text"> {menu}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>

            {/* </div> */}
           
        {/* </div> */}
    </div>






{/* <div class="container bootstrap snippets bootdeys">
<div class="row">
    <div class="col-md-12 content-card">
        <div class="card-big-shadow">
            <div class="card card-just-text" data-background="color" data-color='blue' data-radius="none">
                <div class="content">
                    <h4 class="title">{name}</h4>
                    <p class="description">What all of these have in common is that they're pulling information out of the app or the service and making it relevant to the moment. </p>
                </div>
            </div> 
        </div>
    </div>
    
</div>
</div> */}


{/* <div class="container bootstrap snippets bootdey">

    <div class="row">
		<ul class="notes">   
            <li>
                <div class="rotate-1 yellow-bg">
                    <h4>{name}</h4>
                    <p>Address: {address}</p>
                    <p>Contact #  {contact}</p>
                    <p>Order Type: {method}</p>
                    <p>Timings: {time}</p>
                    <p>Menu: {menu}</p>
                    <a href="#" class="text-danger pull-right"></a>
                </div>
            </li>   
		</ul>  
	</div>
</div> */}



    {/* <div className='mt-5 container'>
    <div className='card'>
         <div className='card-header container-fluid' style={{borderRadius: "25px",cursor:"pointer"}}
          onClick={() => setOpen(!open)} >
             <div className='container mt-3'>
             <div className='row'>
          <p className='col-md-11'><b>{name}</b></p>
          {open ? '➖':'➕'}
             </div>
             </div>
         </div>
     <Collapse in={open}>
             <div className="text-center mt-3">
                <p> <b className="mt-5">Location : </b> {address}</p> 
                <p><b className="">Contact : </b> {contact}</p>
                 <p><b className="">Order Type : </b> {method}</p>
                <p><b className="">Timmings : </b>{time}</p>
                 <p><b className="">Menu : </b> {menu}</p>
             </div>
           </Collapse>
    
          
     </div>
    
     </div> */}
        </>
      );
}
