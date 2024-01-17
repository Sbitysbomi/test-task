import {PostCard} from "features/FetchPosts/PostsList/ui/PostCard.tsx";
import {useNavigate, useParams} from "react-router-dom";
import {useGetPostsListQuery} from "features/FetchPosts/PostsList/api/postsListApi.ts";
import {Loader} from "shared/ui/Loader/Loader.tsx";
import {startTransition} from "react";

interface PostDetailedPageProps{
    className?: string;
}

export const PostDetailedPage = ({className}: PostDetailedPageProps) => {
    const {id} = useParams()


    const navigate = useNavigate()

    if (!id) return
    const {data, isLoading} = useGetPostsListQuery(id)

    const handleClick = () => {
        startTransition(() => {
            navigate(-1)
        })

    }

    if(isLoading) {
        return (
            <div>
                <Loader/>
]            </div>
        );
    }

    return (
        <div>
            {data && data.map((data) =>
                <PostCard
                    key={data.id}
                    data={data}
                    isDetailed={true}
                    ButtonText={"Назад"}
                    onButtonClick={handleClick}
                />)}
        </div>
    );
};

