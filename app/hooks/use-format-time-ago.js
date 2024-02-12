export default function useFormatTimeAgo(createdAt) {
  const koreaTimeOffset = 9 * 60 * 60 * 1000; // 한국 표준시간과의 차이 (9시간)
  const now = new Date();
  const createdDate = new Date(createdAt);
  const koreaCreatedDate = new Date(createdDate.getTime() + koreaTimeOffset);

  const timeDifferenceInSeconds = Math.floor(
    (now.valueOf() - koreaCreatedDate.valueOf()) / 1000,
  );

  if (timeDifferenceInSeconds < 60) {
    return `${timeDifferenceInSeconds}초 전`;
  }
  if (timeDifferenceInSeconds < 3600) {
    const minutes = Math.floor(timeDifferenceInSeconds / 60);
    return `${minutes}분 전`;
  }
  if (timeDifferenceInSeconds < 60 * 60 * 24) {
    const hours = Math.floor(timeDifferenceInSeconds / 3600);
    return `${hours}시간 전`;
  }
  const days = Math.floor(timeDifferenceInSeconds / (60 * 60 * 24));
  return `${days}일 전`;
}
