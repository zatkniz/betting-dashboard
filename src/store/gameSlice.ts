import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Game } from "../types/Game";
import { games } from "../services/games";
import { Bet } from "../types/Bet";

interface GameState {
  games: Game[];
  selectedFilter: string;
  filteredGames: Game[];
  bets: Bet[];
  selectedGame: Game | undefined;
}

const generatedGames = games.getGames(100);

const initialState: GameState = {
  games: generatedGames,
  selectedFilter: "",
  filteredGames: generatedGames,
  bets: [],
  selectedGame: undefined,
};

export const gameSlice = createSlice({
  name: "games",
  initialState,
  reducers: {
    placeBet: (state: GameState, action: PayloadAction<Bet>) => {
      const { gameId, team, amount } = action.payload;
      const game: Game | undefined = state.games.find((g) => g.id === gameId);

      if (game) {
        /**
         *  Find the existing bet in the state
         */
        const existingBetIndex = state.bets.findIndex(
          (bet) => bet.gameId === gameId
        );
        const gameIndex = state.games.findIndex((g) => g.id === gameId);

        if (gameIndex !== -1) {
          /**
           * Update the existing bet if found
           */
          if (existingBetIndex !== -1) {
            const existingBet = state.bets[existingBetIndex];

            /**
             * Decrease the count for the previous team if the team is changed
             */
            if (existingBet.team !== team) {
              if (existingBet.team === game.first_team) {
                state.games[gameIndex].bets.first_team--;
              } else {
                state.games[gameIndex].bets.second_team--;
              }
            }

            /**
             * Update the existing bet's amount and team
             */
            state.bets[existingBetIndex].amount = amount;
            state.bets[existingBetIndex].team = team;
          } else {
            /**
             * Add a new bet if not found
             */
            state.bets.push({
              gameId,
              team,
              amount,
            });
          }

          /**
           * Increment the count for the selected team
           */
          if (team === game.first_team) {
            state.games[gameIndex].bets.first_team++;
          } else {
            state.games[gameIndex].bets.second_team++;
          }
        }

        /**
         * Update the filtered games
         */
        state.filteredGames = state.selectedFilter
          ? state.games.filter((g) => g.sportType === state.selectedFilter)
          : state.games;
      }
    },

    removeBet: (state: GameState, action: PayloadAction<number>) => {
      const gameId = action.payload;
      const existingBetIndex = state.bets.findIndex(
        (bet) => bet.gameId === gameId
      );

      if (existingBetIndex !== -1) {
        /**
         * Get the existing bet before removing it
         */
        const existingBet = state.bets[existingBetIndex];
        state.bets.splice(existingBetIndex, 1);

        /**
         * Find the game and update the bet count
         */
        const gameIndex = state.games.findIndex((g) => g.id === gameId);
        if (gameIndex !== -1) {
          const game = state.games[gameIndex];

          /**
           * Decrease the correct team's bet count
           */
          if (
            existingBet.team === game.first_team &&
            game.bets.first_team > 0
          ) {
            state.games[gameIndex].bets.first_team--;
          } else if (
            existingBet.team === game.second_team &&
            game.bets.second_team > 0
          ) {
            state.games[gameIndex].bets.second_team--;
          }

          /**
           * Clear the selected game if it matches the removed bet
           */
          if (state.selectedGame && state.selectedGame.id === gameId) {
            state.selectedGame = undefined;
          }
        }

        /**
         * Update the filtered games
         */
        state.filteredGames = state.selectedFilter
          ? state.games.filter(
              (game) => game.sportType === state.selectedFilter
            )
          : state.games;
      }
    },

    setFilter: (state: GameState, action: PayloadAction<string>) => {
      if (state.selectedFilter !== action.payload) {
        state.selectedFilter = action.payload;
        state.filteredGames = state.selectedFilter
          ? state.games.filter(
              (game) => game.sportType === state.selectedFilter
            )
          : state.games;
      }
    },

    setSelectedGame: (
      state: GameState,
      action: PayloadAction<Game | undefined>
    ) => {
      state.selectedGame = action.payload;
    },
  },
});
