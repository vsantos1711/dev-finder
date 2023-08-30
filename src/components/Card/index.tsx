import * as S from './style.ts';
import { Building2, Link, MapPin, Twitter } from "lucide-react";
import { CardProps } from "../../pages/Home/api/interface";
import { Calendar } from "../Calendar";

export const Card = ({name, created_at, login, company, bio, public_repos, followers, following, location, html_url, twitter_username, blog, avatar_url}: CardProps) => {
  return (
    <>
      <S.CardContainer>
        <S.TitleContainer>
          <S.Image>
            <img alt="profile photo" src={avatar_url}/>
          </S.Image>

          <S.TitleContent>
            <S.Title>

              <h2>
                {name}
              </h2>

              <S.Span>Joined at {new Date(created_at).toLocaleDateString('en-US',{
                day: '2-digit',
                month: 'long',
                year: 'numeric'
              })}</S.Span>
            </S.Title>

            <S.Link href={html_url} target="_blank">
              @{login}
            </S.Link>
          </S.TitleContent>
        </S.TitleContainer>

        <S.ContentContainer>
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
            <S.UserLink href={blog} target="_blank">
              <Link />
              {blog ?? 'Not available' }
            </S.UserLink>
            <S.UserLink href='#'>
              <Building2/>
              {company ?? 'Not available' }
            </S.UserLink>
          </S.UserLinksContent>
        </S.ContentContainer>
      </S.CardContainer>
      <S.CardContainer>
        <Calendar username={login}/>
      </S.CardContainer>
    </>
  );
};
