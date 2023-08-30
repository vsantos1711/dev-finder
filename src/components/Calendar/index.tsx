import GitHubCalendar from "react-github-calendar";

interface CalendarProps {
  username: string;
}

const themeDark = ["#505050", "#007E51", "#009B63", "#00B876", "#00D98B"]
//const themeLight = ["#EBEDF0", "#9BE9A8", "#40C463", "#30A14E", "#216E39"]

export const Calendar = ({ username }: CalendarProps) => {


  return (
    <>
    <GitHubCalendar
      username={username}
      theme={{
        dark: [themeDark[0], themeDark[1], themeDark[2], themeDark[3], themeDark[4]],
      }}
    />
    </>
  );
};
