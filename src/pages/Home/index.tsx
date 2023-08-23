import * as S from './style.ts'
import {Input} from "../../components/Input";
import {Header} from "../../components/Header";
import {Card} from "../../components/Card";

export const Home = () => {
  return (
    <S.Container>
      <Header/>
      <Input/>
      <Card/>
    </S.Container>
  );
};
