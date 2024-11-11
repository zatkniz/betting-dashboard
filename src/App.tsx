import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import GameCard from "./components/GameCard";
import Filters from "./components/Filters";
import { Game } from "./types/Game";
import { AppContainer } from "./components/Base/Layout/AppContainer";
import { Header } from "./components/Base/Layout/Header";
import { GameGrid } from "./components/Base/Layout/GameGrid";
import { FilterContainer } from "./components/Base/Layout/FilterContainer";
import "./index.css";
import BetModal from "./components/BetModal/BetModal";
import { setFilter } from "./store";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const games = useSelector((state: RootState) => state.filteredGames);

  const handleBetClick = (gameId: number): void => {
    setModalOpen(true);
  };

  return (
    <AppContainer>
      <Header>Betting Dashboard</Header>
      <FilterContainer>
        <Filters
          onFilterChange={(value: string) => dispatch(setFilter(value))}
        />
      </FilterContainer>
      <GameGrid>
        {games.map((game: Game) => (
          <GameCard key={game.id} game={game} onBet={handleBetClick} />
        ))}
      </GameGrid>
      <BetModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
      />
    </AppContainer>
  );
};

export default App;
