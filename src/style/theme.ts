import { Theme } from 'react-github-calendar'

export type ThemeT = {
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  primaryTextColor: string;
  secondaryTextColor: string;
  gitHubTheme: Theme
}

export const defaultTheme: ThemeT = {
  primaryColor: '#1F2A48',
  secondaryColor: '#0079FE',
  backgroundColor: '#141C2F',
  primaryTextColor: '#FFFFFF',
  secondaryTextColor: '#8E94A4',
  gitHubTheme: {
    level0:"#505050",
    level1:'#007E51',
    level2: '#009B63',
    level3:'#00B876',
    level4:'#00D98B'
  }
}