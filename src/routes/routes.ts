import { lazy } from "react";

import NoLazy from "../01-lazyload/pages/NoLazy";

interface Route {
    Component: React.LazyExoticComponent<() => JSX.Element> | (() => JSX.Element);
    name: string;
    path: string;
    to: string;
}

/*
    ? webpackChunkName: 'nombre nuevo'
        sentencia para renombrar Chunk
*/
const LazyLayout = lazy(() => import(/*webpackChunkName: 'LazyLayout'*/'../01-lazyload/layout/LazyLayout'));

export const routes: Route[] = [
    {
        Component: LazyLayout,
        name: 'LazyLayout - Dashboard',
        path: '/lazyload/*',
        to: '/lazyload/',
    },
    {
        Component: NoLazy,
        name: 'No Lazy',
        path: 'no-lazy',
        to: '/no-lazy',
    },
];