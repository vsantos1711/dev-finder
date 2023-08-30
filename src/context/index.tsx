import React, {createContext, useState} from "react";
import {darkTheme, Theme} from "../style/theme.ts";
import {ThemeProvider} from "styled-components";

type PropsType = {
    children: React.ReactNode
}

type ContextType = {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}
export const AppContext = createContext<ContextType>({} as ContextType);

export const AppContextProvider = ({children}: PropsType) => {
    const [theme, setTheme] = useState<Theme>(darkTheme)

    return(
      <AppContext.Provider value={{theme, setTheme}}>
          <ThemeProvider theme={theme}>
              {children}
          </ThemeProvider>
      </AppContext.Provider>
    )

}