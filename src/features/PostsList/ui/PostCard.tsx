import cls from "./PostCard.module.scss"
import {IPost} from "entities/Post/model/Post.ts";
import {FC} from "react";
import {Button} from "shared/ui/Button";

interface PostCardProps {
    className?: string;
    post: IPost
    isInList?: boolean;
    onButtonClick: () => void
    ButtonText?: string;

}

export const PostCard:FC<PostCardProps> = (props) => {

    const {
        post,
        isInList,
        onButtonClick,
        ButtonText
    } = props



    return (
        <div className={cls.PostCard}>
                <p>{`${post.id}.`}</p>
                <h2>{post.title}</h2>
                <p className={isInList ? cls.InListDescription : ''}>
                    {post.description}
                </p>
                <Button
                    onClick={onButtonClick}
                >{ButtonText}
                </Button>
        </div>
    );
};

