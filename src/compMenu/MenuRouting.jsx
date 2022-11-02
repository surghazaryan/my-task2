import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Applehome from './Applehome';
import Mac from './Mac';
import Navbar from './Navbar';
import Phone from './iPhone';
import Onlyapphone from './Onlyapphone';
import Ipad from './Ipad';
import Support from './Support';



export default function MenuRouting() {
    return (
        <div className='mainrouting'>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='*' element={<Applehome />} />
                    <Route path='/Mac' element={<Mac />} />
                    <Route path='/Ipad' element={<Ipad/>}/>
                    <Route path='/Phone' element={<Phone />} />
                    <Route path='/Onlyapphone' element={<Onlyapphone />} />
                    <Route path='/Support' element={<Support/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
