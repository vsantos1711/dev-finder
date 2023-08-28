import styled from 'styled-components'

export const CardContainer = styled.div`
  color: ${({ theme }) => theme.primaryTextColor};
  background-color: ${({ theme }) => theme.primaryColor};
  padding: 2rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
`;
export const TitleContainer = styled.div`
  font-size: x-large;
  display: flex;
  align-items: center;
`;

export const Image = styled.div`
  width: 12rem;
  padding: 1rem;
  img {
    border-radius: 50%;
  }
`;

export const TitleContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;

export const ContentContainer = styled.div`
  align-self: end;
  width: 80%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const H2 = styled.h2`
  font-size: x-large;
  width: fit-content;
`;

export const Span = styled.span`
  font-size: small;
  font-weight: lighter;
  justify-self: flex-end;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.secondaryColor};
  display: block;
  font-size: 1rem;
  @media (max-width: 550px) {
    align-self: center;
  }
`;

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.primaryTextColor};
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
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;
export const UserLink = styled.a`
  min-width: 200px;
  padding: 0.5rem 0 ;
  display: flex;
  gap: 0.7rem;
  align-items: center;
  color: ${({ theme }) => theme.primaryTextColor};
  &:hover {
    color: ${({ theme }) => theme.secondaryColor};
  }
`;
