import * as S from './style.ts'
import {SearchCode} from "lucide-react";

export const Input = () => {
  return (
    <S.InputContainer>
      <SearchCode size='3rem'/>
      <S.Input type="text" name="dev-name" id="dev-name" placeholder="Search GitHub username..." />
      <S.Button>Search</S.Button>
    </S.InputContainer>
  );
};
