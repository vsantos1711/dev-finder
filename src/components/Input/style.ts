import styled from "styled-components";

export const InputContainer = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.5rem 1.5rem;
  gap: 1rem;
  margin-bottom: 2rem;
  justify-content: space-between;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.primaryColor};
  color: ${({ theme }) => theme.secondaryColor};
`;

export const Input = styled.input`
  width: 100%;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.primaryTextColor};
  &::placeholder {
   color: ${({ theme }) => theme.primaryTextColor}
  }
`;

export const Button = styled.button`
  font-size: 1rem;
  padding: 0.8rem 1.7rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.secondaryColor};
  color: white;
`;