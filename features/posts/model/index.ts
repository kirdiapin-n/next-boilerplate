import {forward} from 'effector';
import {createGate} from 'effector-react';
import {getPostsFx} from 'features/posts/model/effects';
import {getPosts, onClick, setMode} from 'features/posts/model/events';

export const Gate = createGate();

forward({
    from: [Gate.open, onClick],
    to: getPosts,
});

forward({
    from: getPosts,
    to: [getPostsFx, setMode.prepend(() => 'LOADING')],
});

forward({
    from: getPostsFx.doneData,
    to: setMode.prepend(() => 'SUCCESS'),
});

forward({
    from: getPostsFx.failData,
    to: setMode.prepend(() => 'FAILURE'),
});
