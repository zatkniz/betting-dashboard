import React from "react";
import styled from "styled-components";

interface SelectProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  options: string[];
  error?: string;
}

const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SelectStyle = styled.select<{ hasError: boolean }>`
  font-weight: 600;
  font-size: 14px;
  color: var(--card-label-color);
  text-align: center;
  background-color: transparent;
  border-radius: 15px;
  border: 1px solid
    ${(props) => (props.hasError ? "red" : "var(--card-border-color)")};
  padding: 10px 20px;
  cursor: pointer;
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 12px;
  margin-top: 5px;
  min-height: 16px;
`;

const Select: React.FC<SelectProps> = ({ value, onChange, options, error }) => {
  const renderOptions = () => {
    return options.map((option, index) => (
      <option key={index} value={option}>
        {option}
      </option>
    ));
  };

  return (
    <SelectWrapper>
      <SelectStyle
        onChange={(e) => onChange(e.target.value)}
        value={value}
        hasError={!!error}
      >
        <option value="">Select an option</option>
        {renderOptions()}
      </SelectStyle>
      <ErrorMessage>{error || "\u00A0"}</ErrorMessage>
    </SelectWrapper>
  );
};

export default Select;
