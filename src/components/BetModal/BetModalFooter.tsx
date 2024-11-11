import React from "react";
import Button from "../Base/Button";
import styled from "styled-components";

interface BetModalFooterProps {
  onClose: () => void;
  handleSubmit: () => void;
  isGameInBets: boolean;
  removeBet: () => void;
}

const BetModalFooterContainerStyle = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
`;

const BetModalFooter: React.FC<BetModalFooterProps> = ({
  onClose,
  handleSubmit,
  isGameInBets,
  removeBet,
}) => {
  return (
    <BetModalFooterContainerStyle>
      <Button onClick={onClose}>Cancel</Button>
      <Button onClick={handleSubmit}>Submit Bet</Button>
      {isGameInBets && <Button onClick={removeBet}>Remove Bet</Button>}
    </BetModalFooterContainerStyle>
  );
};

export default BetModalFooter;
