export default function formatCreatedAt(createdAt) {
  const koreaTimeOffset = 9 * 60 * 60 * 1000; // 한국 표준시간과의 차이 (9시간)
  const createdDate = new Date(createdAt);

  const date = new Date(createdDate.getTime() + koreaTimeOffset);
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const period = hours < 12 ? '오전' : '오후';

  const formattedHours = hours % 12 || 12;

  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  return `${period} ${formattedHours}:${formattedMinutes}`;
}
