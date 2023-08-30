import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 0.5rem 2rem;
  min-height: 100vh;
  max-width: 800px;
  justify-content: center;
  background-color: ${({ theme }) => theme.backgroundColor};
`