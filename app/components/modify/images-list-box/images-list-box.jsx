import * as styles from '@components/modify/images-list-box/images-list-box.styles';
import CameraIcon from '@assets/images/sell/camera-icon.svg';
import {launchImageLibrary} from 'react-native-image-picker';
import {Alert, Image} from 'react-native';
import {deleteImage} from '@/apis/modify/ModifyApi';

export const ImagesListBox = ({
  usedBookId,
  imageUris,
  setImageUris,
  savedImages,
  setSavedImages,
}) => {
  const showPhoto = async () => {
    if (imageUris.length + savedImages.length >= 10) {
      Alert.alert('사진은 10장까지 업로드 가능합니다.');
      return;
    }

    const option = {
      mediaType: 'photo',
      selectionLimit: 10,
    };

    const response = await launchImageLibrary(option);

    if (response.errorMessage)
      Alert.alert('에러가 발생하였습니다. ' + response.errorMessage);
    else {
      if (response.assets.length + imageUris.length + savedImages.length > 10) {
        Alert.alert('사진은 10장까지 업로드 가능합니다.');
        return;
      }
      console.log(response);
      let uris = imageUris;

      console.log('uris: ', uris);
      response.assets.forEach(value => uris.push(value));

      setImageUris(uris);
    }
  };

  return (
    <styles.ImageListContainer>
      <styles.ImageListScrollView horizontal>
        {savedImages.map((savedImage, index) => (
          <styles.EachImageBox key={`saved-image-${index}`}>
            <styles.EachImage source={{uri: savedImage}} />
            <styles.DeleteButtonBox
              activeOpacity={0.7}
              onPress={() => {
                deleteImage(usedBookId, savedImage).then(isDeleted => {
                  if (isDeleted) {
                    setSavedImages(
                      savedImages.filter(value => value !== savedImage),
                    );
                  }
                });
              }}>
              <Image
                source={require('@assets/images/modify/delete-button.png')}
                style={{width: 33, height: 31}}
              />
            </styles.DeleteButtonBox>
          </styles.EachImageBox>
        ))}
        {imageUris.map((imageUri, index) => (
          <styles.EachImageBox key={`image-${index}`}>
            <styles.EachImage source={{uri: imageUri.uri}} />
            <styles.DeleteButtonBox
              activeOpacity={0.7}
              onPress={() => {
                setImageUris(
                  imageUris.filter(value => value.uri !== imageUri.uri),
                );
              }}
            />
          </styles.EachImageBox>
        ))}
        <styles.EachImageBox onPress={showPhoto}>
          <CameraIcon />
          <styles.EachImageText style={{paddingTop: 7}}>
            전공서적의 사진을 업로드해주세요
          </styles.EachImageText>
          <styles.EachImageText>
            {imageUris.length + savedImages.length}/10
          </styles.EachImageText>
        </styles.EachImageBox>
      </styles.ImageListScrollView>
    </styles.ImageListContainer>
  );
};
