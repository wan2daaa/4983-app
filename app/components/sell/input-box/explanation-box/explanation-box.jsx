import QuestionIcon from '@assets/images/sell/question-icon.svg';
import {TouchableOpacity, TouchableWithoutFeedback, View} from 'react-native';
import {useState} from 'react';
import * as styles from '@components/sell/input-box/explanation-box/explanation-box.styles';
import CancelButton from '@assets/images/sell/cancel-button.svg';

export const ExplanationBox = () => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        setIsClicked(false);
      }}>
      <View style={{zIndex: 1}}>
        <TouchableOpacity
          onPress={() => {
            setIsClicked(!isClicked);
          }}
          onBlur={() => {
            setIsClicked(false);
          }}>
          <QuestionIcon />
        </TouchableOpacity>
        {isClicked && (
          <styles.ExplanationTextBox>
            <styles.CancelButtonTouchableOpacity
              onPress={() => {
                setIsClicked(false);
              }}>
              <CancelButton />
            </styles.CancelButtonTouchableOpacity>
            <styles.ExplanationText>
              거래 날짜와 시간은{' '}
              <styles.ExplanationTextBold>
                상경관에 위치한
              </styles.ExplanationTextBold>
            </styles.ExplanationText>
            <styles.ExplanationText>
              <styles.ExplanationTextBold>
                사물함에 책을 둘 수 있는 시간대
              </styles.ExplanationTextBold>
              이오니,
            </styles.ExplanationText>
            <styles.ExplanationTextGreen>
              거래 가능한 날짜와 시간을
            </styles.ExplanationTextGreen>
            <styles.ExplanationTextGreen>
              신중히 선택해 주세요!
            </styles.ExplanationTextGreen>
          </styles.ExplanationTextBox>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};
