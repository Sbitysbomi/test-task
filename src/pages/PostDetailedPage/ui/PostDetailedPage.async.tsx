import {lazy} from "react";

export const PostDetailedPageAsync = lazy(() =>
    import("./PostDetailedPage.tsx").then((module) => ({
        default: module.PostDetailedPage,
    }))
);
