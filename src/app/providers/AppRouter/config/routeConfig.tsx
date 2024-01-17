import {PostListPage} from "pages/PostListPage";
import {NotFoundPage} from "pages/NotFoundPage/ui/NotFoundPage.tsx";
import {RouteProps} from "react-router-dom";
import {PostDetailedPage} from "pages/PostDetailedPage";

export type AppRouteProps = RouteProps & {
    authOnly?:boolean
}
export enum AppRoutes {
    POSTS = 'posts',
    POSTS_DETAILED = "posts_detailed",
    NOT_FOUND = 'not_found',
}

export const RoutePaths: Record<AppRoutes, string> = {
    [AppRoutes.POSTS]: '/',
    [AppRoutes.POSTS_DETAILED] : ':id',

    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
    [AppRoutes.POSTS]: {
        path: RoutePaths.posts,
        element: <PostListPage />,

    },
    [AppRoutes.POSTS_DETAILED] : {
      path: RoutePaths.posts_detailed,
      element: <PostDetailedPage/>
    },

    [AppRoutes.NOT_FOUND]: {
        path: RoutePaths.not_found,
        element: <NotFoundPage />,
    },
};
