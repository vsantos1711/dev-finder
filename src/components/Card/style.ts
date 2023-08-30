import styled from 'styled-components'

export const CardContainer = styled.div`
  color: ${({ theme }) => theme.primaryTextColor};
  background-color: ${({ theme }) => theme.primaryColor};
  padding: 1rem 2rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
`;
export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Image = styled.div`
  width: 8rem;
  padding: 0.5rem 0;
  img { 
    border-radius: 50%;
  }

`;

export const TitleContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  
  @media (max-width: 550px) {
    flex-direction: column;
    gap: 0.5rem;
    align-items: start;
  }
`;

export const ContentContainer = styled.div`
  align-self: end;
  width: 75%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;


export const Span = styled.span`
  font-size: small;
  font-weight: lighter;
  justify-self: flex-end;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.secondaryColor};
  font-size: 1rem;
  width: fit-content;
`;

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.primaryTextColor};
  margin-bottom: 1.5rem;
`;

export const UserContent = styled.div`
  display: flex;
  border-radius: 1rem;
  flex-wrap: wrap;
  padding: 1.5rem 2.5rem;
  gap: 4rem;
  background-color:  ${({ theme }) => theme.backgroundColor};
  margin-bottom: 1rem;
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
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;
export const UserLink = styled.a`
  min-width: 200px;
  padding: 0.5rem ;
  display: flex;
  gap: 0.7rem;
  align-items: center;
  color: ${({ theme }) => theme.primaryTextColor};
  &:hover {
    color: ${({ theme }) => theme.secondaryColor};
  }
`;
