import {decrementScore, incrementScore} from 'pages/effector/model/events';
import {$score} from 'pages/effector/model/stores';
import {ROUTES} from 'routes';
import {Button} from 'ui/atoms/Button';
import {useStore} from 'effector-react';
import Link from 'next/link';
import React from 'react';

const Effector = () => {
    const onDecrement = () => decrementScore();
    const onIncrement = () => incrementScore();

    return (
        <div>
            <h1>{'Welcome to effector'}</h1>
            <Score />

            <Button onClick={onIncrement}>{'Inc'}</Button>
            <Button onClick={onDecrement}>{'Dec'}</Button>

            <div />
            <Link href={ROUTES.HOME}>{'to home'}</Link>
        </div>
    );
};

const Score = () => {
    const score = useStore($score);

    return <div>{`score is ${score}`}</div>;
};

export default Effector;
