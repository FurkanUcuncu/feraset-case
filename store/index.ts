import {
    combineReducers,
    configureStore,
    PreloadedStateShapeFromReducersMapObject
} from "@reduxjs/toolkit";
import { logoSlice } from "./logo/logoSlice";

const reducers = combineReducers({
    logo: logoSlice.reducer,
});

function setupStore(preloadedState?: PreloadedStateShapeFromReducersMapObject<RootState>) {
    return configureStore({
        reducer: reducers,
        preloadedState,
        middleware: (getDefaultMiddleware) => {
            return getDefaultMiddleware({
                serializableCheck: false,
            });
        },
    });
}

export type RootState = ReturnType<typeof reducers>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
export const store = setupStore();
