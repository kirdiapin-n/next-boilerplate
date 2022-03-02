import {useStore} from 'effector-react';
import {PostsContainer} from 'features/posts/containers/PostsContainer';
import {$mode} from 'features/posts/model/stores';
import {Error} from 'features/posts/ui/Error';
import {Loader} from 'features/posts/ui/Loader';
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
