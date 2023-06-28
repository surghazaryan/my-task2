import React, { useContext } from 'react'
import { contextHeader } from '../../Redux/action/Home'



export default function Header() {
    const {admin} = useContext(contextHeader)
  return (
    <div className=''>
       {admin[2]}
    </div>
  )
}
