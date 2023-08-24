import * as S from './style.ts';
import {Building2, Link, MapPin, Twitter} from "lucide-react";
import {CardProps} from "../../pages/Home/api/interface";

export const Card = ({name, created_at, login, url, bio, public_repos, followers, following, location, htmlUrl, twitter_username, blog, avatar_url}: CardProps) => {
  return (
    <S.CardContainer>
      <S.Image>
        <img alt="profile photo" src={avatar_url}/>
      </S.Image>

      <S.DivContent>
        <S.Title>
          <S.H1>
            {name}
          </S.H1>

          <S.Span>Joined at {new Date(created_at).toLocaleDateString('en-US',{
            day: '2-digit',
            month: 'long',
            year: 'numeric'
          })}</S.Span>
        </S.Title>

        <S.Link href={url}>
          @{login}
        </S.Link>

        <S.Paragraph>
          {bio}
        </S.Paragraph>

        <S.UserContent>

          <S.UserItem>
            <S.UserItemTitle>Repos</S.UserItemTitle>
            <S.UserItemData>{public_repos}</S.UserItemData>
          </S.UserItem>

          <S.UserItem>
            <S.UserItemTitle>Followers</S.UserItemTitle>
            <S.UserItemData>{followers}</S.UserItemData>
          </S.UserItem>

          <S.UserItem>
            <S.UserItemTitle>Following</S.UserItemTitle>
            <S.UserItemData>{following}</S.UserItemData>
          </S.UserItem>

        </S.UserContent>

        <S.UserLinksContent>
          <S.UserLink href='#'>
            <MapPin/>
            {location ?? 'Not available' }
          </S.UserLink>
          <S.UserLink href='#'>
            <Twitter />
            {twitter_username ?? 'Not available' }
          </S.UserLink>
          <S.UserLink href='#'>
            <Link />
            {blog ?? 'Not available' }
          </S.UserLink>
          <S.UserLink href='#'>
            <Building2/>
            {htmlUrl ?? 'Not available' }
          </S.UserLink>
        </S.UserLinksContent>

      </S.DivContent>

    </S.CardContainer>
  );
};
