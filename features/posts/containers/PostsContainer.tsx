import {useList} from 'effector-react';
import {$posts} from 'features/posts/model/stores';
import {Post} from 'features/posts/ui/Post';
import {ROUTES} from 'routes';
import {NavLink} from 'ui/atoms/NavLink';

export const PostsContainer = () =>
    useList($posts, post => (
        <div>
            <Post>{post.body}</Post>
            <NavLink href={`${ROUTES.POSTS}/${post.id}`}>{'to post'}</NavLink>
        </div>
    ));
