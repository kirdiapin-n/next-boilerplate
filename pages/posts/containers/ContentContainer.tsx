import {useStore} from 'effector-react';
import {PostsContainer} from 'pages/posts/containers/PostsContainer';
import {$mode} from 'pages/posts/model/stores';
import {Error} from 'pages/posts/ui/Error';
import {Loader} from 'pages/posts/ui/Loader';
import React from 'react';

export const ContentContainer = () => {
    const mode = useStore($mode);

    return (
        <div>
            {mode === 'SUCCESS' && <PostsContainer />}
            {mode === 'LOADING' && <Loader />}
            {mode === 'FAILURE' && <Error />}
        </div>
    );
};
