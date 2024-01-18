import {PostCard} from "features/PostsList/ui/PostCard.tsx";
import {useNavigate, useParams} from "react-router-dom";
import {useGetPostsListQuery} from "features/PostsList/api/postsListApi.ts";
import {Loader} from "shared/ui/Loader";
import {FC, startTransition} from "react";

interface PostDetailedPageProps{
    className?: string;
}

export const PostDetailedPage:FC<PostDetailedPageProps> = (props ) => {
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
                    post={data}
                    isInList={false}
                    ButtonText={"Назад"}
                    onButtonClick={handleClick}
                />)}
        </div>
    );
};

