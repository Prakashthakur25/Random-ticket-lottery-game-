
import Ticket from "./Ticket"
import {lotary , sum  }from "./helper";
import { useState } from "react";


export default function Lotory({iswinning}){
let [num ,setNum]  = useState(lotary(4));
 
let newnum=function(){
setNum(lotary(4));
}

return (
    <>
    <h1>Lottery Game !</h1> 
    <Ticket num={num}/>
         &nbsp;&nbsp;
    <hr></hr>
    <button onClick={newnum}>Buy New Ticket</button>
    &nbsp;
    <h1>{iswinning(num)}</h1>
    </>
)

}