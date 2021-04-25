import React from "react";
import {RootStoreType} from "./redax/store";


export const StoreContext = React.createContext({} as RootStoreType);

export type ProviderType = {
    store: RootStoreType,
    children: React.ReactNode
}

export const Provider = (props: ProviderType) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    )
}
