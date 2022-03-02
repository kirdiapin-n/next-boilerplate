import {createEffect} from 'effector';
import {getPostsRequest} from 'features/posts/model/requests';

export const getPostsFx = createEffect(() => getPostsRequest());
