import { Typography } from '@mui/material';

export const greetings = {
  morningGreeting: 'בוקר טוב',
  afternoonGreeting: 'צהריים טובים',
  nightGreeting: 'לילה טוב'
};

export const getPartOfTheDay = (hour: number) => {
  const isMorning = hour >= 6 && hour < 12;
  const isAfternoon = hour >= 12 && hour <= 18;

  if (isMorning) {
    return greetings.morningGreeting;
  }
  if (isAfternoon) {
    return greetings.afternoonGreeting;
  }

  return greetings.nightGreeting;
};

const Greeting = () => (
  <Typography variant='caption'>
    {`${getPartOfTheDay(new Date().getHours())},משתמש`}
  </Typography>
);

export default Greeting;