import {createEffect} from 'effector';
import {getPostRequest} from 'features/post/model/requests';

export const getPostFx = createEffect(getPostRequest);
