import styled from 'styled-components'

export const CardContainer = styled.div`
  color: ${({ theme }) => theme.primaryTextColor};
  background-color: ${({ theme }) => theme.primaryColor};
  padding: 3rem;
  border-radius: 1rem;
  display: flex;
  gap: 1rem;
`;

export const Image = styled.div`
  width: 20%;
  height: auto;
  img {
    border-radius: 50%;
  }
`;

export const DivContent = styled.div`
  width: 80%;
`;

export const Title = styled.div`
  font-size: x-large;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;
export const H1 = styled.h2`
  font-size: x-large;
  
`;

export const Span = styled.span`
  font-size: small;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.secondaryColor};
  display: block;
  margin-bottom: 2rem;
`;

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.secondaryTextColor};
  margin-bottom: 2rem;
`;

export const UserContent = styled.div`
  display: flex;
  border-radius: 1rem;
  padding: 1.5rem 2.5rem;
  gap: 4rem;
  background-color:  ${({ theme }) => theme.backgroundColor};
  margin-bottom: 2rem;
`;

export const UserItem = styled.div`
  display: flex;
  flex-direction: column;
`;
export const UserItemTitle = styled.p`
  font-size: 1rem;
`;
export const UserItemData = styled.span`
  font-size: 1.7rem;
  font-weight: bold;
  
`;

export const UserLinksContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;
export const UserLink = styled.a`
  padding: 0.5rem 2rem;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.primaryTextColor};
`;
