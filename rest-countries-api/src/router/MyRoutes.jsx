import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Main } from '../components/Main';
import { Details } from '../components/Details';
import { Error } from '../components/Error';

export const MyRoutes = () => {
    return (
        <BrowserRouter>
            <Header />

            <Routes>
                <Route path='/' element={ <Navigate to='/home' />} />
                <Route path='/home' element={ <Main />} />
                <Route path='/country/:name' element={ <Details /> } />

                <Route path='/404' element={ <Error /> } />
                <Route path='*' element={ <Navigate replace to='/404' />} />
            </Routes>
        </BrowserRouter>
    )
}
