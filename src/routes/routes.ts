import { lazy } from "react";

interface Route {
    Component: React.LazyExoticComponent<() => JSX.Element> | (() => JSX.Element);
    name: string;
    path: string;
    to: string;
}

const Lazy1 = lazy(() => import('../01-lazyload/pages/LazyPage1'));
const Lazy2 = lazy(() => import('../01-lazyload/pages/LazyPage2'));
const Lazy3 = lazy(() => import('../01-lazyload/pages/LazyPage3'));

export const routes: Route[] = [
    {
        Component: Lazy1,
        name: 'Lazy-1',
        path: 'lazy1',
        to: '/lazy1',
    },
    {
        Component: Lazy2,
        name: 'Lazy-2',
        path: 'lazy2',
        to: '/lazy2',
    },
    {
        Component: Lazy3,
        name: 'Lazy-3',
        path: 'lazy3',
        to: '/lazy3',
    },
];