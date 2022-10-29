import { postGET } from "$lib/_api";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ cookies }) => {
    const user = cookies.get("token");
    let posts = {};
    if (user) {
        posts = await postGET(user);
    }
    return {
        user: user || null,
        posts: posts
    }
}