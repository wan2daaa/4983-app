import * as styles from './SignupProfileInput.styles';
import {TouchableOpacity} from 'react-native';
import {checkStudentIdDuplicate} from '@/apis/auth/signup/DuplicateApi';
import {useEffect, useState} from 'react';

const SignupProfileInput = ({
  studentId,
  setStudentId,
  setNickname,
  isStudentIdDuplicate,
  setIsStudentIdDuplicate,
}) => {
  const [isHakbunButtonEnabled, setIsHakbunButtonEnabled] = useState(false);
  const handleCheckStudentId = async () => {
    try {
      setIsStudentIdDuplicate(await checkStudentIdDuplicate(studentId));
    } catch (error) {
      setIsStudentIdDuplicate(false);
    }
  };

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
              // disabled={!isHakbunButtonEnabled}
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
          <styles.MessageText
            fontColor={isStudentIdDuplicate ? '#f61818' : '#02B878'}>
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
          <styles.ButtonBox>
            <TouchableOpacity hitSlop={{top: 20, bottom: 20}}>
              <styles.ButtonText>중복 확인</styles.ButtonText>
            </TouchableOpacity>
          </styles.ButtonBox>
        </styles.InputButtonBox>
      </styles.InputBox>
    </styles.Container>
  );
};

export default SignupProfileInput;
