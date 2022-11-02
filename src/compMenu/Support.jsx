import React from 'react'
import { useMemo } from 'react'
import { useReducer } from 'react'


export default function Support() {
    const [state, dispatch] = useReducer(reducer, initalstate)
     
    return (
        <>
            <div className='Support'>
                <h1>Apple Support</h1>
            </div>
            <div>
                {state.count}
                <button onClick={(e) => {
                    e.preventDefault()
                    dispatch({ type: 'left' })
                }}>Left</button>
            </div>
        </>
    )
}


const initalstate = {
    count: 'suren',
    count1: 'gahzaryan'
}

function reducer(state, action) {
    switch (action.type) {
        case "left":
            return { count: state.count1 }
            
    }
}



