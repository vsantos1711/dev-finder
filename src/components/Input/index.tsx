import * as S from './style.ts'
import {SearchCode} from "lucide-react";

interface InputProps {
  onClick: () => void,
  setUsername: (username: string) => void
}
export const Input = ({ onClick, setUsername }: InputProps) => {

  return (
    <S.InputContainer onSubmit={(e) => e.preventDefault()}>
      <SearchCode size='3rem'/>
      <S.Input type="text" name="dev-name" id="dev-name" placeholder="Search GitHub username..." onChange={({target}) => setUsername(target.value)}/>
      <S.Button onClick={onClick}>Search</S.Button>
    </S.InputContainer>
  );
};
