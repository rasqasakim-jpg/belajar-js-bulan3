import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import todoReducer from "../features/counter/todoSlice";
import  userReducer  from "../features/counter/userSlice";


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todoReducer,
    users: userReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
