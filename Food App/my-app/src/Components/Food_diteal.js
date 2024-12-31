import React from 'react'
import { useParams } from 'react-router-dom';

export default function Food_diteal(props) {
    // Funcation
    let clickminus = () =>{ 
        let oldcount=document.getElementById("cartcount").innerText;
        if (oldcount>1){
        let calculation= oldcount-1;
        let setnew=document.getElementById("cartcount").innerText = calculation;
        return console.log(calculation);
        }
    }
    let clickplus = () =>{ 
        let oldcount=document.getElementById("cartcount").innerText;
        let calculation= Number(oldcount)+1;
        let setnew=document.getElementById("cartcount").innerText = calculation;
        return console.log(calculation);
    }
    // get url id 
    const {id}=useParams();
    let getTheItem=Number(id)-1;
  return (
    <div className='fooddetails_background'>
       
        <div className="card fooddetails">
            <img className="card-img-top fooddetails_img" src={props.foodList[getTheItem].Images}  alt="..."/>
            <div className="card-body">
                <h4 className="card-title fooddetails_name">{props.foodList[getTheItem].Titel} </h4>
                <h6 className="card-title fooddetails_price"><del>Tk{props.foodList[getTheItem].Price+100}</del>  Tk{props.foodList[getTheItem].Price}</h6>
                <p className="card-text mt-3">
                {props.foodList[getTheItem].Description}
                </p>
                <div>
                    <div className='fooddetails_left'>
                        <button type="button" onClick={clickminus}><ion-icon name="remove-circle" id="minus"></ion-icon></button>
                        <span id="cartcount">1</span>
                        <button type="button" onClick={clickplus}><ion-icon name="add-circle" id ></ion-icon></button>
                    </div>
                    <div className='mt-5'>
                        <div className='fooddetails_right'>
                            <div class="d-grid gap-2 primaryfooddetails_button">
                                <button class="btn fooddetails_button" type="button">Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
