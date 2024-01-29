export const useFormatTimeAmPm = utcTime => {
  const date = new Date(utcTime);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? '오후' : '오전';
  const hours12 = hours % 12 || 12;
  const minutesWithZero = minutes < 10 ? `0${minutes}` : minutes;
  return `${ampm}${hours12}:${minutesWithZero}`;
};
