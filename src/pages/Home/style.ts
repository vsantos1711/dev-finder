import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 0.5rem 2rem;
  max-width: 800px;
  justify-content: center;
  min-height: 100vh;
`
export const Main = styled.main`
    background-color: ${({ theme }) => theme.backgroundColor};
`;