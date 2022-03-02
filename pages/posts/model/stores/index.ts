import {createStore, restore} from 'effector';
import {getPostsFx} from 'pages/posts/model/effects';
import {setMode} from 'pages/posts/model/events';
import {Gate} from 'pages/posts/model/index';

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
