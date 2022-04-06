import React,{useEffect, useState} from 'react'

import Items from '../Items';

export default function Allitem() {
    const [value,setvalue] =useState("");
   const fetchData =()=> {
       fetch('https://624c8179c172b69d6925fc11.mockapi.io/allitem')
       .then(res=> res.json())
       .then(response=>setvalue(response))
   }
    console.log(value)
    useEffect(() => {
        fetchData();
        }, []);
        
  return (

   <div style={{backgroundColor:"pink"}}>
   <h1>
       allitems
   </h1>
   {value && value.length>0 && value.map(i=><Items data={i}/>)}
   </div>
  )
  }
