import * as S from "./style.ts"
import {Sun} from "lucide-react";

export const Header = () => {
  return (
    <S.Header>
      <S.Title>devfinder</S.Title>
      <S.Theme>LIGHT <Sun/></S.Theme>
    </S.Header>
  );
};
