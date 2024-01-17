import {StateSchema} from "./StateSchema.ts";
import {configureStore, Middleware, ReducersMapObject} from "@reduxjs/toolkit";
import {rtkApi} from "shared/api/rtkApi.ts";
import {$api} from "shared/api/api.ts";
export function createReduxStore(
    initialState?: StateSchema,
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        [rtkApi.reducerPath] : rtkApi.reducer
    };



    const store = configureStore({
        reducer: rootReducers as ReducersMapObject<StateSchema>,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => {
            return getDefaultMiddleware({
                thunk: {
                    extraArgument: {
                        api: $api
                    },
                },
            }).concat(rtkApi.middleware) as Middleware[];
        }

    });


    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
