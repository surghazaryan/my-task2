import React from 'react'


const initalState = {
  name:'',
  password:''
   
}

export default function MainReduser(state = initalState, action) {
    switch (action.type) {
        case 'change-input-value':
            return {
                ...state,
                name: action.payload
            }
        case 'change-inp-val-2':
            return {
                ...state,
                password: action.payload
            }

        default:
            return state
    }
}
