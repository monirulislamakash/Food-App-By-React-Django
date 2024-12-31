import React from 'react'
import {
    BrowserRouter,
    Router,
    Routes,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
export default function Item_home(props) {
  return (
    <div className='container mt-3'>
        <div className='item_home'>
            {console.log(props.foodList.map((i)=>i))}
            {props.foodList.map((i)=>
                <Link to={"details/"+i.id}>
                    <div className='item_card mt-3'>
                        <div className='item_home_img'>
                            <img src={i.Images}/>
                        </div>
                        <div className='item_home_text'>
                            <h5>{i.Titel}</h5>
                            <p className='mt-2'>{i.des}</p>
                            <p className='mt-2'>
                                <span><ion-icon name="bicycle"></ion-icon> Free</span>
                                <span><ion-icon name="time"></ion-icon> 30 min</span>
                            </p>
                        </div>
                        <div className='item_home_price'>
                            <h6>{i.Price}Tk</h6>
                            <p>1 item</p>
                            <ion-icon name="cart-outline"></ion-icon>
                        </div>
                    </div>
                </Link>
            )}
        </div>
        
    </div>
  )
}
