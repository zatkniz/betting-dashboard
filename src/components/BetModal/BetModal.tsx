import React, { useEffect, useState } from "react";
import Modal from "../Base/Modal/Modal";
import BetModalFooter from "./BetModalFooter";
import Input from "../Base/Input";
import Select from "../Base/Select";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { placeBet, removeBet, RootState } from "../../store";

interface BetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const InputStyleContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 20px;
`;

const BetModal: React.FC<BetModalProps> = ({ isOpen, onClose }) => {
  const [team, setTeam] = useState("");
  const [amount, setAmount] = useState(0);
  const game = useSelector((state: RootState) => state.selectedGame);
  const bets = useSelector((state: RootState) => state.bets);
  const dispatch = useDispatch();
  const [inputError, setInputError] = useState<string | undefined>(undefined);
  const [selectError, setSelectError] = useState<string | undefined>(undefined);

  useEffect(() => {
    setTeam("");
    setAmount(0);
    setInputError(undefined);
    setSelectError(undefined);
  }, [isOpen]);

  useEffect(() => {
    const bet = bets.find((bet) => bet.gameId === game?.id) || undefined;

    if (bet) {
      setTeam(bet.team);
      setAmount(bet.amount);
    }
  }, [game, bets, isOpen]);

  if (!isOpen || !game) return null;

  const handleSubmit = (): void => {
    setInputError(undefined);
    setSelectError(undefined);

    if (amount <= 0) {
      setInputError("Amount should be greater than 0");
    }

    if (!team) {
      setSelectError("Please select a team");
    }

    if (team && amount > 0) {
      dispatch(
        placeBet({
          gameId: game.id,
          team,
          amount,
        })
      );
      onClose();
    }
  };

  const updateAmount = (value: number): void => {
    setInputError(undefined);
    setAmount(value);
  }

  const updateTeam = (value: string): void => {
    setSelectError(undefined);
    setTeam(value);
  }

  const handleRemoveBet = (): void => {
    dispatch(removeBet(game.id));
    onClose();
  };

  const title = (): JSX.Element => (
    <>
      {game.first_team} vs {game.second_team} ({game.sportType})
    </>
  );

  const isGameInBets = (): boolean =>
    !!bets.find((bet) => bet.gameId === game?.id);

  const footer = (): JSX.Element => (
    <BetModalFooter
      onClose={onClose}
      handleSubmit={handleSubmit}
      isGameInBets={isGameInBets()}
      removeBet={handleRemoveBet}
    />
  );

  const selectOptions = [game.first_team, game.second_team];

  return (
    <Modal title={title()} footer={footer()} isOpen={isOpen} onClose={onClose}>
      <h3>Place Your Bet</h3>
      <InputStyleContainer>
        <Select
          onChange={(e) => updateTeam(e)}
          value={team}
          options={selectOptions}
          error={selectError}
        />
        <Input
          placeholder="Amount"
          onChange={(e) => updateAmount(e)}
          value={amount}
          error={inputError}
        />
      </InputStyleContainer>
    </Modal>
  );
};

export default BetModal;
