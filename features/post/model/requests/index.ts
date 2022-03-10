export const getPostRequest = async (id: string) =>
    await fetch(`https://gorest.co.in/public/v2/posts/${id}`).then(
        res => res.json(),
        error => error
    );
