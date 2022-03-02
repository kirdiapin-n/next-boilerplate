import {useList} from 'effector-react';
import {$posts} from 'pages/posts/model/stores';
import {Post} from 'pages/posts/ui/Post';

export const PostsContainer = () => useList($posts, post => <Post>{post.body}</Post>);
