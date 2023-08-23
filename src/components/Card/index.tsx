import * as S from './style.ts';
import {Building2, Link, MapPin, Twitter} from "lucide-react";
export const Card = () => {
  return (
    <S.CardContainer>
      <S.Image>
        <img alt="profile photo" src='https://avatars.githubusercontent.com/u/104466068?v=4'/>
      </S.Image>

      <S.DivContent>
        <S.Title>
          <S.H1>
            Vinícius Francisco
          </S.H1>

          <S.Span>Joined 25 Jan 2011</S.Span>
        </S.Title>

        <S.Link href='#'>
          @vsantos1711
        </S.Link>

        <S.Paragraph>
          This profile has no bio. This profile has no bio.
        </S.Paragraph>

        <S.UserContent>

          <S.UserItem>
            <S.UserItemTitle>Repos</S.UserItemTitle>
            <S.UserItemData>8</S.UserItemData>
          </S.UserItem>

          <S.UserItem>
            <S.UserItemTitle>Followers</S.UserItemTitle>
            <S.UserItemData>3938</S.UserItemData>
          </S.UserItem>

          <S.UserItem>
            <S.UserItemTitle>Following</S.UserItemTitle>
            <S.UserItemData>9</S.UserItemData>
          </S.UserItem>

        </S.UserContent>

        <S.UserLinksContent>
          <S.UserLink href='#'>
            <MapPin/>
            San Francisco
          </S.UserLink>
          <S.UserLink href='#'>
            <Twitter />
            Not available
          </S.UserLink>
          <S.UserLink href='#'>
            <Link />
            https://github.blog
          </S.UserLink>
          <S.UserLink href='#'>
            <Building2/>
            @agithub
          </S.UserLink>
        </S.UserLinksContent>

      </S.DivContent>

    </S.CardContainer>
  );
};
