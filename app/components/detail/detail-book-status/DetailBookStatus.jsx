import * as styles from './DetailBookStatus.styles';
import SelectIcon from '@assets/images/common/select-icon.svg';
import NotSelectIcon from '@assets/images/common/not-select-icon.svg';
import {useState} from 'react';

const DetailBookStatus = ({
  underlinedOrWrite,
  coverDamaged,
  discolorationAndDamage,
}) => {
  const [checkboxStates, setCheckboxStates] = useState([false, false, false]);

  const toggleCheckbox = index => {
    const newCheckboxStates = [...checkboxStates];
    newCheckboxStates[index] = !newCheckboxStates[index];
    setCheckboxStates(newCheckboxStates);
  };

  return (
    <styles.Container>
      <styles.TitleText>서적 상태</styles.TitleText>
      <styles.StatusBox onPress={() => toggleCheckbox(0)}>
        <styles.IconBox>
          {underlinedOrWrite ? <SelectIcon /> : <NotSelectIcon />}
        </styles.IconBox>
        <styles.ContentBox>
          <styles.Content>밑줄 및 필기 흔적</styles.Content>
        </styles.ContentBox>
      </styles.StatusBox>

      <styles.StatusBox onPress={() => toggleCheckbox(1)}>
        <styles.IconBox>
          {discolorationAndDamage ? <SelectIcon /> : <NotSelectIcon />}
        </styles.IconBox>
        <styles.ContentBox>
          <styles.Content>페이지 변색 및 훼손</styles.Content>
        </styles.ContentBox>
      </styles.StatusBox>

      <styles.StatusBox onPress={() => toggleCheckbox(2)}>
        <styles.IconBox>
          {coverDamaged ? <SelectIcon /> : <NotSelectIcon />}
        </styles.IconBox>
        <styles.ContentBox>
          <styles.Content>겉표지 훼손 여부</styles.Content>
        </styles.ContentBox>
      </styles.StatusBox>
    </styles.Container>
  );
};

export default DetailBookStatus;
