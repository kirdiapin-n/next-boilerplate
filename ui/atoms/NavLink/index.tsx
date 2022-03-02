import Link from 'next/link';
import React from 'react';
import {TRoutes} from 'routes';
import style from './NavLink.module.css';

type TProps = {
    children: React.ReactNode;
    href: TRoutes;
};
export const NavLink = React.memo(({children, ...props}: TProps) => {
    return (
        <div className={style.container}>
            <Link {...props}>{children}</Link>
        </div>
    );
});
