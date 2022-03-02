import {createEffect} from 'effector';
import {getPostsRequest} from 'pages/posts/model/requests';

export const getPostsFx = createEffect(() => getPostsRequest());
