import {useGate} from 'effector-react';
import Link from 'next/link';
import {ContentContainer} from 'pages/posts/containers/ContentContainer';
import {Gate} from 'pages/posts/model';
import {onClick} from 'pages/posts/model/events';
import React from 'react';
import {ROUTES} from 'routes';
import {Button} from 'ui/atoms/Button';

export default () => {
    useGate(Gate);

    const handleClick = React.useCallback(() => onClick(), []);

    return (
        <div>
            <h1>{'POSTS'}</h1>

            <Button onClick={handleClick}>{'Update posts'}</Button>

            <ContentContainer />

            <Link href={ROUTES.HOME}>{'to home'}</Link>
        </div>
    );
};
