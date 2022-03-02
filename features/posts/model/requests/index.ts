export const getPostsRequest = async () =>
    await fetch('https://gorest.co.in/public/v2/posts').then(
        res => res.json(),
        error => error
    );
