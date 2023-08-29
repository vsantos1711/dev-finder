import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.primaryTextColor};
  font-size: 2rem;
`;

export const Theme = styled.button`
  color: ${({ theme }) => theme.primaryTextColor};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
`;