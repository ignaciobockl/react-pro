import { Suspense } from 'react';
import { BrowserRouter, Navigate, NavLink, Routes, Route } from 'react-router-dom';

import { routes } from './routes';

import logo from '../logo.svg';

/*
    Link es utilizado para hacer la navegacion como si fuera un href
    y el NavLink hace lo mismo que el link pero tambien puede 
    determinar si esta en la ruta dependiendo del path y asi
    poner una clase de activo o no
*/

export const Navigation = () => {
    return (
        /* 
            ? fallback
                se puede poner un spinner para que muestre react 
                mientras hace la  primera carga  de los modulos
                y los datos no estan listos  
        */
        <Suspense fallback={<span>Loading ...</span>}>
            <BrowserRouter>
                <div className='main-layout'>
                    <nav>
                        <img src={logo} alt='React logo' />
                        <ul>
                            {
                                routes.map(route => (
                                    <li key={route.to}>
                                        <NavLink
                                            // en caso de estar activa cambia de color
                                            className={({ isActive }) => isActive ? 'nav-active' : ''}
                                            to={route.to}
                                        >
                                            {route.name}
                                        </NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>

                    <Routes>
                        {
                            routes.map(route => (
                                <Route
                                    element={<route.Component />}
                                    key={route.to}
                                    path={route.path}
                                />
                            ))
                        }
                        {/* replace no permite regresar */}
                        <Route path='/*' element={<Navigate to={routes[0].to} replace />} />
                    </Routes>

                </div>
            </BrowserRouter>
        </Suspense>
    )
}
