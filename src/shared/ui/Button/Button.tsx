import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Button.module.scss"
import {ButtonHTMLAttributes, FC }from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
}

export const Button:FC<ButtonProps> = (props) => {
    const  {
        children,
        className,
        ...otherProps
    } = props

    return (
        <button
            className={classNames(cls.Button, {},[])}
            {...otherProps}
        >
            {children}
        </button>
    );
};

