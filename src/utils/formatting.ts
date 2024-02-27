export const getTimeString = (minutes: number) => {
  const hours = Math.floor(minutes / 60);
  const remainderMinutes = minutes % 60;
  let timeString = '';

  if (hours) timeString += `${hours}h `;
  if (remainderMinutes) timeString += `${remainderMinutes}m`;

  return timeString;
};

export const getFormattedIngredient = (name: string, amount: number, unit: string) => {
  const formattedUnit = unit === 'whole' ? '(whole)' : unit;
  return `${name} — ${amount} ${formattedUnit}`;
};
