import {classNames} from "shared/lib/classNames/classNames";
import cls from "./PostCard.module.scss"
import {IPost} from "entities/Post/model/Post.ts";
import {FC, memo} from "react";
import {Button} from "shared/ui/Button";
import {truncateDescription} from "../lib/truncateDescription/truncateDescription.ts";

interface PostCardProps {
    className?: string;
    data: IPost
    onButtonClick: () => void
    isDetailed: boolean;
    shortDescriptionLength?: number;
    ButtonText?: string;
}

export const PostCard:FC<PostCardProps> = memo((props) => {

    const {
        data,
        onButtonClick,
        shortDescriptionLength,
        isDetailed,
        ButtonText
    } = props



    const shortDescription = truncateDescription(data.description, shortDescriptionLength)


    return (
        <div className={classNames(cls.PostCard, {},[])}>
                <p>{`${data.id}.`}</p>
                <h2>{data.title}</h2>
                <p>
                    {isDetailed ? data.description : shortDescription}
                </p>
                <Button
                    onClick={onButtonClick}
                >{ButtonText}
                </Button>
        </div>
    );
});

