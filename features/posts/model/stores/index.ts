import {createStore, restore} from 'effector';
import {getPostsFx} from 'features/posts/model/effects';
import {setMode} from 'features/posts/model/events';
import {Gate} from 'features/posts/model/index';

export const $mode = restore(setMode, 'LOADING');

type TPost = {
    body: string;
    id: number;
    title: string;
    user_id: number;
};
export const $posts = createStore<TPost[]>([])
    .on(getPostsFx.doneData, (_, state) => state)
    .reset(Gate.close);
