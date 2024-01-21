import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './CounterSlice'    // src/store/CounterSlice.ts
import showIfTrueReducer from './ShowIfTrueSlice'    // src/store/slice.ts
import userSliceReducer from './UserSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        showIfTrue: showIfTrueReducer,
        user: userSliceReducer
    },
    devTools: true,
})



// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch