import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Home } from '../components/Home';

export const MyRouter = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Navigate to='/home'/>} />
                <Route path='/home' element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}
