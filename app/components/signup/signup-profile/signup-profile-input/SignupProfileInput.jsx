import * as styles from './SignupProfileInput.styles';
import {TouchableOpacity} from 'react-native';
import {checkStudentIdDuplicate} from '@/apis/auth/signup/singupApi';
import {useEffect, useState} from 'react';

const SignupProfileInput = ({
  studentId,
  setStudentId,
  nickname,
  setNickname,
  isStudentIdDuplicate,
  handleCheckStudentId,
  isNicknameDuplicate,
  handleCheckNickname,
}) => {
  const [isHakbunButtonEnabled, setIsHakbunButtonEnabled] = useState(false);

  useEffect(() => {
    const isNumeric = /^\d+$/.test(studentId);

    if (studentId.length === 8 && isNumeric) {
      setIsHakbunButtonEnabled(true);
    } else {
      setIsHakbunButtonEnabled(false);
    }
  }, [studentId]);

  return (
    <styles.Container>
      <styles.InputBox>
        <styles.InputTitle>학번</styles.InputTitle>
        <styles.InputButtonBox>
          <styles.Input
            id="studentId"
            placeholder="학번을 입력해 주세요."
            onChangeText={setStudentId}
          />
          <styles.ButtonBox
            style={{
              backgroundColor: isHakbunButtonEnabled ? '#02B878' : '#D1D1D1',
            }}>
            <TouchableOpacity
              onPress={handleCheckStudentId}
              disabled={!isHakbunButtonEnabled}
              hitSlop={{top: 20, bottom: 20}}>
              <styles.ButtonText
                style={{
                  color: isHakbunButtonEnabled ? '#FFF' : '#50555C',
                }}>
                중복 확인
              </styles.ButtonText>
            </TouchableOpacity>
          </styles.ButtonBox>
        </styles.InputButtonBox>
        {isStudentIdDuplicate !== null && (
          <styles.MessageText isStudentIdDuplicate={isStudentIdDuplicate}>
            {!isStudentIdDuplicate
              ? '사용 가능한 학번입니다.'
              : '이미 가입된 학번 정보입니다.'}
          </styles.MessageText>
        )}
      </styles.InputBox>
      <styles.InputBox>
        <styles.InputTitle>닉네임</styles.InputTitle>
        <styles.InputButtonBox>
          <styles.Input
            id="nickname"
            placeholder="닉네임을 입력해 주세요."
            onChangeText={setNickname}
          />
          <styles.ButtonBox
            style={{
              backgroundColor: nickname.length === 0 ? '#D1D1D1' : '#02B878',
            }}>
            <TouchableOpacity
              onPress={handleCheckNickname}
              disabled={nickname.length === 0}
              hitSlop={{top: 20, bottom: 20}}>
              <styles.ButtonText
                style={{
                  color: nickname.length === 0 ? '#50555C' : '#FFF',
                }}>
                중복 확인
              </styles.ButtonText>
            </TouchableOpacity>
          </styles.ButtonBox>
        </styles.InputButtonBox>
        {isNicknameDuplicate !== null && (
          <styles.MessageText2 isNicknameDuplicate={isNicknameDuplicate}>
            {!isNicknameDuplicate
              ? '사용 가능한 닉네임입니다.'
              : '사용 중인 닉네임이에요!'}
          </styles.MessageText2>
        )}
      </styles.InputBox>
    </styles.Container>
  );
};

export default SignupProfileInput;
