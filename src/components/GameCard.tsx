import React from "react";
import Card from "./Base/Card/Card";
import { Game } from "../types/Game";
import Button from "./Base/Button";
import { useDispatch, useSelector } from "react-redux";
import { RootState, setSelectedGame } from "../store";

interface CardProps {
  game: Game;
  onBet: (gameId: number) => void;
}

const GameCard: React.FC<CardProps> = ({ game, onBet }) => {
  const dispatch = useDispatch();
  const bets = useSelector((state: RootState) => state.bets);

  const setGame = (): void => {
    dispatch(setSelectedGame(game));
    onBet(game.id);
  };

  const isGameInBets = (): boolean =>
    !!bets.find((bet) => bet.gameId === game?.id);

  const title = (): JSX.Element => (
    <>
      {game.first_team} vs {game.second_team} ({game.sportType})
    </>
  );

  const footer = (): JSX.Element => (
    <Button onClick={() => setGame()}>
      {isGameInBets() ? "Update Bet" : "Place a Bet"}
    </Button>
  );

  return (
    <Card isSelected={isGameInBets()} title={title()} footer={footer()}>
      <p>
        <strong>Odds:</strong> {game.first_team}: {game.odds.first_team},{" "}
        {game.second_team}: {game.odds.second_team}
      </p>
      <p>
        <strong>Bets:</strong> {game.first_team}: {game.bets.first_team},{" "}
        {game.second_team}: {game.bets.second_team}
      </p>
    </Card>
  );
};

export default GameCard;
