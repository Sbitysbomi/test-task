
import {PostsList} from "features/PostsList/ui/PostsList.tsx";
import {useGetPostsListQuery} from "features/PostsList/api/postsListApi.ts";
import {FC} from "react";

export const PAGE_ID = 'PAGE_ID';

export const PostListPage:FC = () => {
    const { data, isLoading } = useGetPostsListQuery()
    if(!data) return false


    return (
        <div>
            <PostsList data={data} isLoading={isLoading}/>
        </div>
    );
};

