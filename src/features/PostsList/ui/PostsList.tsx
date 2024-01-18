import { startTransition } from 'react';
import {useNavigate} from "react-router-dom";
import {Loader} from "shared/ui/Loader";
import {FC} from "react";
import {List,} from "react-virtualized"
import {IPost} from "entities/Post/model/Post.ts";
import {PostCard} from "features/PostsList/ui/PostCard.tsx";
interface PostsListProps{
    className?: string;
    data: IPost[]
    isLoading: boolean
}


export const PostsList:FC<PostsListProps> = (props) => {

    const {data, isLoading} = props

    const navigate = useNavigate()
    const handleDetailsClick  = (id: string) => {
        startTransition(() => {
            navigate(`/${id}`)
        })

    };


    if(isLoading){
        return (
            <div>
                <Loader/>
            </div>
        );
    }

    return (
        <List
            height={750}
            width={800}
            rowHeight={300}
            rowCount={data.length}
            rowRenderer={({key,  index,  style}) => {
                const profile = data[index]
                     return (
                        <div key={key} style={style}>
                            <PostCard
                                post={profile}
                                ButtonText={"Подробнее"}
                                onButtonClick={() => handleDetailsClick(profile.id)}
                                isInList={true}
                            />
                        </div>
                    );
                }}
            />
    )
};

