import { configureStore } from "@reduxjs/toolkit";
import { gameSlice } from "./gameSlice";

export type RootState = ReturnType<typeof store.getState>;

export const { placeBet, setFilter, setSelectedGame, removeBet } = gameSlice.actions;
export const store = configureStore({ reducer: gameSlice.reducer });
