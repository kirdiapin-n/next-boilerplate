import {createEvent} from 'effector';

export const getPosts = createEvent<void>();
export const onClick = createEvent<void>();

type TMode = 'LOADING' | 'FAILURE' | 'SUCCESS';
export const setMode = createEvent<TMode>();
