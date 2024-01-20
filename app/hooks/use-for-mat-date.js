export default function useformatDate(dateString) {
  if (!dateString) {
    return '날짜 정보 없음';
  }

  const date = new Date(dateString.replace('T', ' '));
  const mm = date.getMonth() + 1;
  const dd = date.getDate();

  return `${mm}월 ${dd}일`;
}
