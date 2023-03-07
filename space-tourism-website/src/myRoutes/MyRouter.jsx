import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { Crew } from '../components/Crew';
import { Destination } from '../components/Destination';
import { Header } from '../components/Header';
import { Home } from '../components/Home';

export const MyRouter = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Navigate to='/home'/>} />
                <Route path='/home' element={<Home />} />
                <Route path='/destination' element={<Destination />} />
                <Route path='/crew' element={<Crew />} />
            </Routes>
        </BrowserRouter>
    )
}
