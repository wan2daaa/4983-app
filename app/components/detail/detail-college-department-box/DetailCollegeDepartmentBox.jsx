import * as styles from './DetailCollegeDepartmentBox.styles';
import MoreButtonIcon from '@assets/images/detail/MoreButton.svg';
import {useState} from 'react';
import {Modal} from 'react-native';
import {findCategoryNameByValue} from '@data/categories';
import {UsedBookDelete} from '@/apis/detail/DetailApi';

const DetailCollegeDepartmentBox = ({
  navigation,
  usedBookId,
  college,
  department,
  isBookOwner,
}) => {
  const [isModal, setIsModal] = useState(false);
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const collegeName = findCategoryNameByValue(college, false);
  const departmentName = findCategoryNameByValue(department, true);
  const shouldDisplayDepartment = department !== 'GE';

  const handleModalOpen = () => {
    setIsModal(!isModal);
  };
  const handleModalClose = () => {
    setIsModal(false);
  };

  const handleDeleteModalOpen = () => {
    setIsModal(false);
    setIsDeleteModal(!isDeleteModal);
  };
  const handleDeleteModalClose = () => {
    setIsDeleteModal(false);
  };

  const handleDeleteButtonClick = () => {
    UsedBookDelete({usedBookId})
      .then(response => {
        console.log('삭제 성공: ', response);
        handleDeleteModalClose();
        navigation.navigate('Home');
      })
      .catch(error => {
        console.error(
          '삭제 실패: ',
          error.response ? error.response.data : error.message,
        );
      });
  };

  return (
    <styles.Container>
      <styles.Box>
        <styles.Content>{collegeName}</styles.Content>
      </styles.Box>
      {shouldDisplayDepartment && (
        <styles.Box>
          <styles.Content>{departmentName}</styles.Content>
        </styles.Box>
      )}
      {isBookOwner && (
        <styles.MoreButton
          onPress={handleModalOpen}
          hitSlop={{bottom: 10, top: 10, left: 5, right: 5}}>
          <MoreButtonIcon />
        </styles.MoreButton>
      )}

      <Modal visible={isModal} transparent={true} animationType="none">
        <styles.ModalContainer onPress={handleModalClose}>
          <styles.ModalBox>
            <styles.ModalEditBox
              onPress={() => {
                setIsModal(false);
                navigation.navigate('Modify', {
                  usedBookId,
                });
              }}>
              <styles.ModalText>수정하기</styles.ModalText>
            </styles.ModalEditBox>
            <styles.ModalDeleteBox onPress={handleDeleteModalOpen}>
              <styles.ModalText>지우기</styles.ModalText>
            </styles.ModalDeleteBox>
          </styles.ModalBox>
        </styles.ModalContainer>
      </Modal>

      <Modal visible={isDeleteModal} transparent={true} animationType="none">
        <styles.DeleteModalContainer>
          <styles.DeleteModalBox>
            <styles.DeleteModalTitle>
              글을 지우면 복구할 수 없어요! {'\n'}
              그래도 지우시겠어요?
            </styles.DeleteModalTitle>
            <styles.DeleteButtonBox>
              <styles.DeleteButton onPress={handleDeleteModalClose}>
                <styles.DeleteButtonText>아니오</styles.DeleteButtonText>
              </styles.DeleteButton>
              <styles.CancelButton onPress={handleDeleteButtonClick}>
                <styles.CancelButtonText>네</styles.CancelButtonText>
              </styles.CancelButton>
            </styles.DeleteButtonBox>
          </styles.DeleteModalBox>
        </styles.DeleteModalContainer>
      </Modal>
    </styles.Container>
  );
};

export default DetailCollegeDepartmentBox;
