export const useFormatTimeAmPm = time => {
  const koreaTimeOffset = 9 * 60 * 60 * 1000; // 한국 표준시간과의 차이 (9시간)
  const now = new Date();
  const createdDate = new Date(time);

  const date = new Date(createdDate.getTime() + koreaTimeOffset);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? '오후' : '오전';
  const hours12 = hours % 12 || 12;
  const minutesWithZero = minutes < 10 ? `0${minutes}` : minutes;
  return `${ampm}${hours12}:${minutesWithZero}`;
};
