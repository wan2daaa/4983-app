import * as styles from './DetailPossibleDateBox.styles';
import Calender from '@assets/images/detail/CalendarIcon.svg';

function formatDate(inputDate) {
  const date = new Date(inputDate);

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const formattedDate = `${year}년 ${month}월 ${day}일`;
  let formattedTime = `${hours}시`;

  if (minutes !== 0) {
    formattedTime += ` ${minutes}분`;
  }

  return `${formattedDate} ${formattedTime}`;
}

const DetailPossibleDateBox = ({tradeAvailableDatetime}) => {
  const formattedDate = formatDate(tradeAvailableDatetime);

  return (
    <styles.Container>
      <styles.TitleBox>
        <styles.IconBox>
          <Calender />
        </styles.IconBox>
        <styles.Title>거래 가능 날짜/시간</styles.Title>
      </styles.TitleBox>
      <styles.DateContainer>
        <styles.DateBox>
          <styles.DateText>{formattedDate}에 책을 둘게요!</styles.DateText>
        </styles.DateBox>
      </styles.DateContainer>
      <styles.Content>
        사물함 설정 이후
        <styles.ContentBold>“24시간 이내"</styles.ContentBold>에 책을
        수령해야해요!
      </styles.Content>
    </styles.Container>
  );
};

export default DetailPossibleDateBox;
