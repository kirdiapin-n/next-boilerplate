import {forward, guard} from 'effector';
import {createGate} from 'effector-react';
import {getPostFx} from 'features/post/model/effects';
import {setMode} from 'features/post/model/events';

export const Gate = createGate<{id?: string}>();

guard({
    clock: guard({
        clock: Gate.status,
        filter: Boolean,
    }),
    source: Gate.state.map(x => x?.id),
    filter: Boolean,
    target: [getPostFx, setMode.prepend(() => 'LOADING')],
});

forward({
    from: getPostFx.doneData,
    to: setMode.prepend(() => 'SUCCESS'),
});

forward({
    from: getPostFx.failData,
    to: setMode.prepend(() => 'FAILURE'),
});
