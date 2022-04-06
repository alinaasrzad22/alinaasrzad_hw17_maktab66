import React, { useContext } from 'react'

import { valueContext } from './Contexts'

export default function Selecteditem() {
    const {name}= useContext(valueContext)
    
  return (
    <div  className="selected"style={{backgroundColor:"deeppink"}}> 
        <h1>Selecteditem</h1>
        {name.map(item=><p>{item.name}</p> )}
    </div>
  )
}
