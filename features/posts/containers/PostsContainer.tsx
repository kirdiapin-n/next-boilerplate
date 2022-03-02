import {useList} from 'effector-react';
import {$posts} from 'features/posts/model/stores';
import {Post} from 'features/posts/ui/Post';

export const PostsContainer = () => useList($posts, post => <Post>{post.body}</Post>);
