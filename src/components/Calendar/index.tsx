import GitHubCalendar from "react-github-calendar";
//import ColorScale from "react-activity-calendar/color-scale";

interface CalendarProps {
  username: string;
}
//const gitHubTheme = ["#505050", "#007E51", "#009B63", "#00B876", "#00D98B"];

export const Calendar = ({ username }: CalendarProps) => {
  return (
    <GitHubCalendar
      username={username}
      theme={{ dark: ["#505050", "#007E51", "#009B63", "#00B876", "#00D98B"] }}
    />
  );
};
