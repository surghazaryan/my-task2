import React from 'react'
import { useReducer } from 'react'


const initalstate = {
    count: 'My Support',
    count2: 'At Apple, every product we make is built to last. We design durable, easy-to-use devices with innovative features that customers depend on, all while protecting their privacy and data. Customers should have access to safe, reliable, and secure repairs with genuine Apple parts if they need them.',
    count3: 'Beware of counterfeit parts',
    count4: 'Some counterfeit and third party power adapters and batteries may not be designed properly and could result in safety issues. To ensure you receive a genuine Apple battery during a battery replacement, we recommend visiting an Apple Store or Apple Authorized Service Provider. If you need a replacement adapter to charge your Apple device, we recommend getting an Apple power adapter,'

}

function reducer(state, action) {
    switch (action.type) {
        case 'left':
            return { count: state.count2 }
        case 'l':
            return { count: state.count3 }
        case 'le':
            return { count: state.count4 }
    }
}

export default function Support() {
    const [state, dispatch] = useReducer(reducer, initalstate);
    return (
        <>
            <div className='Support'>
                <h1>Apple Support</h1>
            </div>
            <div className='text-support'>
                {state.count}
                <button onClick={() => { dispatch({ type: 'left', }) }}>1</button>
                <button onClick={() => { dispatch({ type: 'l', }) }}>2</button>
                <button onClick={() => { dispatch({ type: 'le', }) }}>3</button>
            </div>
        </>
    )
}
