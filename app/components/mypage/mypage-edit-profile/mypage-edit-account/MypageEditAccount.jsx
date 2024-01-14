import * as styles from './MypageEditAccount.styles';
import SelectAccountIcon from '@assets/images/mypage/SelectAccountIcon.svg';

const MypageEditAccount = () => {
  return (
    <styles.Container>
      <styles.Title>계좌등록</styles.Title>
      <styles.InputBox>
        <styles.DropDown>
          <styles.DropDownText>국민은행</styles.DropDownText>
          <SelectAccountIcon width={15} height={14} />
        </styles.DropDown>
        <styles.Input placeholder="123456789000" />
      </styles.InputBox>
    </styles.Container>
  );
};

export default MypageEditAccount;
