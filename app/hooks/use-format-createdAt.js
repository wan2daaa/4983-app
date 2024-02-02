export default function formatCreatedAt(createdAt) {
  const date = new Date(createdAt);
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const period = hours < 12 ? '오전' : '오후';

  const formattedHours = hours % 12 || 12;

  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  return `${period} ${formattedHours}:${formattedMinutes}`;
}
