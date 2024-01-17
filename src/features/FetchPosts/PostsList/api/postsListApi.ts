import {rtkApi} from "shared/api/rtkApi.ts";
import {IPost} from "entities/Post/model/Post.ts";

const postsListApi = rtkApi.injectEndpoints({
    endpoints: (builder) => ({
        getPostsList: builder.query<IPost[], string>({
            query: (id ) => ({
                url: `/posts`,
                params: {id}
            }),
        }),
    }),
});

export const { useGetPostsListQuery} = postsListApi;
