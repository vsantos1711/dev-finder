import * as S from './style.ts'
import {Input} from "../../components/Input";
import {Header} from "../../components/Header";

export const Home = () => {
  return (
    <S.Container>
      <Header/>
      <Input/>
    </S.Container>
  );
};
