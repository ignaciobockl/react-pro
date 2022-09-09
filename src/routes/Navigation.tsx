import { BrowserRouter, Navigate } from 'react-router-dom';
import { Routes, Route, NavLink } from 'react-router-dom';
import { ShoppingPage } from '../02-component-patterns/pages/ShoppingPage';

import logo from '../logo.svg';

/*
    Link es utilizado para hacer la navegacion como si fuera un href
    y el NavLink hace lo mismo que el link pero tambien puede 
    determinar si esta en la ruta dependiendo del path y asi
    poner una clase de activo o no
*/

export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className='main-layout'>
                <nav>
                    <img src={logo} alt='React logo' />
                    <ul>
                        <li>
                            <NavLink
                                // en caso de estar activa cambia de color
                                className={({ isActive }) => isActive ? 'nav-active' : ''}
                                to='/'
                            >
                                Shopping
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) => isActive ? 'nav-active' : ''}
                                to='/about'
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) => isActive ? 'nav-active' : ''}
                                to='/users'
                            >
                                Users
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path='/about' element={<h1>About Page</h1>} />
                    <Route path='/' element={<ShoppingPage />} />
                    <Route path='/users' element={<h1>Users Page</h1>} />
                    {/* replace no permite regresar */}
                    <Route path='/*' element={<Navigate to='/' replace />} />
                </Routes>

            </div>
        </BrowserRouter>
    )
}
