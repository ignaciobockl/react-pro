import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

interface Route {
    Component: () => JSX.Element;
    name: string;
    path: string;
    to: string;
}

export const routes: Route[] = [
    {
        Component: LazyPage1,
        name: 'Lazy-1',
        path: 'lazy1',
        to: '/lazy1',
    },
    {
        Component: LazyPage2,
        name: 'Lazy-2',
        path: 'lazy2',
        to: '/lazy2',
    },
    {
        Component: LazyPage3,
        name: 'Lazy-3',
        path: 'lazy3',
        to: '/lazy3',
    },
];