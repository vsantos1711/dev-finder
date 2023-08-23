import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  height: 100vh;
  max-width: 800px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundColor};
`