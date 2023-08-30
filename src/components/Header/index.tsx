import * as S from "./style.ts"
import {Moon, Sun} from "lucide-react";
import {AppContext} from "../../context";
import {useContext} from "react";
import {darkTheme, lightTheme} from "../../style/theme.ts";

export const Header = () => {

  const{theme, setTheme} = useContext(AppContext)
  function changeTheme(){
    theme === darkTheme ? setTheme(lightTheme) : setTheme(darkTheme)
  }

  return (
    <S.Header>
      <S.Title>devfinder</S.Title>
      <S.Button onClick={changeTheme}>
        {theme === darkTheme ? (
          <>
            LIGHT <Sun />
          </>
        ) : (
          <>
            DARK <Moon />
          </>
        )}
      </S.Button>
    </S.Header>
  );
};
