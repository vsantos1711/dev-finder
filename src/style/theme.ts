export type Theme = {
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  primaryTextColor: string;
  secondaryTextColor: string;
  calendarColor: string[]
}

export const lightTheme: Theme = {
  primaryColor: '#E4E7EB',
  secondaryColor: '#47A3F3',
  backgroundColor: '#F0F2F5',
  primaryTextColor: '#1F2A48',
  secondaryTextColor: '#8E94A4',
  calendarColor: ["#505050", "#007E51", "#009B63", "#00B876", "#00D98B"]
}

export const darkTheme : Theme = {
  primaryColor: '#1F2A48',
  secondaryColor: '#0079FE',
  backgroundColor: '#141C2F',
  primaryTextColor: '#FFFFFF',
  secondaryTextColor: '#8E94A4',
  calendarColor: ["#505050", "#007E51", "#009B63", "#00B876", "#00D98B"]
}