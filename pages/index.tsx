import Link from 'next/link';
import React from 'react';
import {ROUTES} from 'routes';

export default () => {
    return (
        <div>
            <h1>{'Welcome to Next.js!'}</h1>
            <ul>
                <li>
                    <Link href={ROUTES.ABOUT}>{'Example transition to ABOUT'}</Link>
                </li>
                <li>
                    <Link href={ROUTES.EFFECTOR}>{'Example transition to EFFECTOR example'}</Link>
                </li>
                <li>
                    <Link href={ROUTES.POSTS}>{'to posts'}</Link>
                </li>
            </ul>
        </div>
    );
};
