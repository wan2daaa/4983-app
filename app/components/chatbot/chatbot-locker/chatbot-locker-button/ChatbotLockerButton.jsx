import * as styles from './ChatbotLockerButton.styles';

const ChatbotLockerButton = ({
  navigation,
  ChatRoomId,
  isLockerClicked,
  selectLockerNumber,
}) => {
  return (
    <styles.ButtonContainer>
      <styles.GuideBox>
        <styles.UnavailableBox />
        <styles.Text>사용중</styles.Text>
        <styles.AvailableBox />
        <styles.Text>선택가능</styles.Text>
      </styles.GuideBox>
      <styles.Button
        onPress={() => {
          if (isLockerClicked) {
            navigation.navigate('ChatbotLockerPassword', {
              ChatRoomId,
              selectLockerNumber,
            });
          }
        }}
        isLockerClicked={isLockerClicked}
        disabled={!isLockerClicked}>
        <styles.ButtonText isLockerClicked={isLockerClicked}>
          선택완료
        </styles.ButtonText>
      </styles.Button>
    </styles.ButtonContainer>
  );
};

export default ChatbotLockerButton;
