import {lazy} from "react";

export const PostListPageAsync = lazy(() =>
    import("./PostListPage.tsx").then((module) => ({
        default: module.PostListPage,
    }))
);
