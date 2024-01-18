import './Loader.scss';
import {FC} from "react";

interface LoaderProps {
    className?: string;
}
export const Loader:FC = ({ className }: LoaderProps) => (
    <div className={'lds-ellipsis'}>
        <div />
        <div />
        <div />
        <div />
    </div>
);
