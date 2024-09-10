import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProductCart from '../component/ProductCart'
import Home from '../component/Home'

const Routing = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/cards' element={<ProductCart />} />
                {/*     eg for private and guest route 
                <Route path='/' element={<GuestRoute> <Login /> </GuestRoute>} />
                <Route path='/dashboard' element={<PrivateRoute> <Index /> </PrivateRoute>} /> */}
            </Routes>
        </>
    )
}

export default Routing
