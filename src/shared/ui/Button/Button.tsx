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
            className={cls.Button}
            {...otherProps}
        >
            {children}
        </button>
    );
};

