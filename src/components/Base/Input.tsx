import React from "react";
import styled from "styled-components";

interface InputProps {
  value: number;
  onChange: (value: number) => void;
  placeholder?: string;
  error?: string;
}

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputStyle = styled.input<{ hasError: boolean }>`
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

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder,
  error,
}) => (
  <InputWrapper>
    <InputStyle
      type="number"
      placeholder={placeholder}
      onChange={(e) => onChange(Number(e.target.value))}
      value={value}
      min={0}
      hasError={!!error}
    />
    <ErrorMessage>{error || "\u00A0"}</ErrorMessage>
  </InputWrapper>
);

export default Input;
