import GitHubCalendar from "react-github-calendar";
import {useContext} from "react";
import {AppContext} from "../../context";

interface CalendarProps {
  username: string;
}


export const Calendar = ({ username }: CalendarProps) => {

  const { theme } = useContext(AppContext)
  const { calendarColor } = theme

  return (
    <>
    <GitHubCalendar
      username={username}
      theme={{
        light: [calendarColor[0], calendarColor[1], calendarColor[2], calendarColor[3], calendarColor[4]],
        dark: [calendarColor[0], calendarColor[1], calendarColor[2], calendarColor[3], calendarColor[4]],
      }}
    />
    </>
  );
};
