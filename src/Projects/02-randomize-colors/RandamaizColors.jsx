import React, { useState }from 'react'
import Title from '../components/Title'

export default function RandamaizColors() {
  function handleClick(){
    console.log("click")
  }

  function handleSecClick(e){
    let body = document.querySelector("body");
    body.style.backgroundColor = getRandomColor();
    e.target.style.backgroundColor = getRandomColor();
  }

  function getRandomColor(){ 
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++){
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;

  }


  return (
    <div className="container m-auto text-center text-primary">
    <Title text={"Randamize Color"} classes={"mb-4"} />
    <button className="btn btn-danger " onClick={(e)=>handleSecClick(e)}>Click me!</button>
    <button className="btn btn-success " onClick={(e)=>handleSecClick(e)}>Click me!</button>
    <button className="btn btn-primary " onClick={(e)=>handleSecClick(e)}>Click me!</button>
    <button className="btn btn-warning " onClick={(e)=>handleSecClick(e)}>Click me!</button>
    </div>
  )
}
