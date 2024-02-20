export const getTimeString = (minutes: number) => {
  const hours = Math.floor(minutes / 60);
  const remainderMinutes = minutes % 60;
  let timeString = '';

  if (hours) timeString += `${hours}h `;
  if (remainderMinutes) timeString += `${remainderMinutes}m`;

  return timeString;
};
