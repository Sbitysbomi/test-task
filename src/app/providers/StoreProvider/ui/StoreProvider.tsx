import { Provider } from 'react-redux';
import {FC, ReactNode} from 'react';
import { createReduxStore } from 'app/providers/StoreProvider/config/store.ts';
import {StateSchema} from "app/providers/StoreProvider/config/StateSchema.ts";


interface StoreProviderProps{
    children: ReactNode ;
    initialStore?: DeepPartial<StateSchema>
}

export const StoreProvider:FC<StoreProviderProps> =  (props) => {
    const {
        children,
        initialStore,
    } = props

    const store = createReduxStore(
        initialStore as StateSchema,
    );

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
}
