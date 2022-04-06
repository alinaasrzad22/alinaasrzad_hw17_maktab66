import React, { useContext } from 'react'

import { valueContext } from './components/Contexts'

export default function Items(props) {
    const {data}= props
    const {name,setName} = useContext(valueContext)
    const handleChange =(e)=>{
        if (e.target.checked){
            setName([...name,{name:data.name,id:data.id}])
        }else{
            setName(name.filter(u=> u.id!==data.id))
        }
    }
  return (
    <div>
        <input type="checkbox" onChange={handleChange}/>
        <label>
            {data.name}
        </label>
    </div>
  )
}
