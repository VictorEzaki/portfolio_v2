import { Routes, Route } from 'react-router-dom';

import MainLayout from './../layouts/MainLayout';
import Sobre from './../pages/Sobre'

function AppRoutes() {
    return (
        <Routes>
            <Route element={ <MainLayout />}> 
                <Route path='/' element={<Sobre />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes