export function getDate(time_string: string) {

  const [hours, minutes] = time_string.split(":").map(Number);
  const time = hours * 60 + minutes;

  function isSpecialDay(date: Date): boolean {
    const specialDays = [1, 5, 6, 17, 24, 25, 26, 28, 31];
    const dayOfMonth = date.getDate();
    return specialDays.includes(dayOfMonth);
  }

  function getNextWednesday(date: Date): Date {
    // Přidání jednoho dne
    date.setDate(date.getDate() + 1);

    // Kontrola, zda je nový den středa a není speciálním dnem
    while (date.getDay() !== 3 || isSpecialDay(date)) {
      date.setDate(date.getDate() + 1);
    }

    return date;
  }

  function adjustToNextWednesdayAndAvoidSpecialDays(
    minutesFromMidnight: number
  ): Date {
    const date = new Date();
    const hours = Math.floor(minutesFromMidnight / 60);
    const minutes = minutesFromMidnight % 60;

    date.setHours(hours);
    date.setMinutes(minutes);

    // Získání nejbližší středy, která není speciálním dnem
    const nextWednesday = getNextWednesday(date);

    return nextWednesday;
  }

  const adjustedDate = adjustToNextWednesdayAndAvoidSpecialDays(time);
  console.log("adjustedDate", adjustedDate);

  return adjustedDate;
}
