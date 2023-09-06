import * as S from "./style.ts";
import { Moon, Sun } from "lucide-react";
import { AppContext } from "../../context";
import { useContext } from "react";
import { darkTheme, lightTheme } from "../../style/theme.ts";
import { Link } from "react-router-dom";

export const Header = () => {
  const { theme, setTheme } = useContext(AppContext);
  function changeTheme() {
    theme === darkTheme ? setTheme(lightTheme) : setTheme(darkTheme);
  }

  return (
    <S.Header>
      <Link to="/">
        <S.Title>devfinder</S.Title>
      </Link>
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
