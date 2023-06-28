import React from 'react'

const initalHome = {
    name:'',
    lastName:''
}

export default function ReduserHome(state=initalHome,action) {
  switch (action.type) {
    case 'edit-val':
        return{
            ...state,
            name:action.payload
        }
  
    default:
        return state
  }
}
