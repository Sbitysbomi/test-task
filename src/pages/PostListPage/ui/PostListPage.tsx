
import {PostsList} from "features/FetchPosts/PostsList/ui/PostsList.tsx";
import {useGetPostsListQuery} from "features/FetchPosts/PostsList/api/postsListApi.ts";

export const PAGE_ID = 'PAGE_ID';

export const PostListPage = () => {
    const { data, isLoading } = useGetPostsListQuery()
    if(!data) return false


    return (
        <div>
            <PostsList data={data} isLoading={isLoading}/>
        </div>
    );
};

