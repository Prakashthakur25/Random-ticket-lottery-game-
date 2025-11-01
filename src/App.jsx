import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Lotory from './Lotory'
import {lotary , sum  }from "./helper";

function App() {
  let 
   iswinning = (array) => {                 //yha hmne ek function banaya hai aur hmne use as props pass kiya h 
    return sum(array) ===15 ?"🎉 Congratulations! You won!": "😢 You did not win!"; // isme agr number ka sum 15 ke barabar h to winn               
                         //sum(num)  ?"🎉 Congratulations! You won!": "😢 You did not win!";  
                         // agr lotory me koi ek number match kr jay jaise maine 5 set kr rkha h hepler me sum function k use krkr

  };


  return (
    <>
   
  <Lotory iswinning={iswinning}/>
        
    </>
  )
}

export default App
