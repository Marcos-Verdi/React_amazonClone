import React from 'react'
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'
import Login from './Login'
import { Route, Routes } from 'react-router-dom'


export default function App() {
    return (
        <>
            <Routes>
                <Route exact path='/' element={<><Header />< Home/></>} />
                <Route exact path='/checkout' element={<><Header /> <Checkout /></>} />
                <Route exact path='/login' element={<Login />} />
            </Routes>
        </>
    )
} 