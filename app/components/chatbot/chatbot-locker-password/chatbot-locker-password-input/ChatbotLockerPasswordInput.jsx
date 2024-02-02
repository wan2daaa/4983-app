import * as styles from './ChatbotLockerPasswordInput.styles';
import React from 'react';

const ChatbotLockerPasswordInput = ({password, setPassword, setIsPassword}) => {
  const maxLength = 4;

  const handlePasswordChange = newPassword => {
    if (newPassword.length < maxLength) {
      setIsPassword(false);
    } else {
      newPassword = newPassword.slice(0, maxLength);
      setIsPassword(true);
    }

    newPassword = newPassword.replace(/[^0-9]/g, '');
    setPassword(newPassword);
  };

  return (
    <>
      <styles.Input
        type="text"
        value={password === null ? '' : password.toString()}
        placeholder="비밀번호를 입력해 주세요."
        onChangeText={newPassword => handlePasswordChange(newPassword)}
      />
      <styles.GuideText>
        *해당 비밀번호는 꼭 기억해주세요.{'\n'}
        다른 비밀번호로 설정 시, 이후 거래에 불이익이 있습니다.
      </styles.GuideText>
    </>
  );
};

export default ChatbotLockerPasswordInput;
