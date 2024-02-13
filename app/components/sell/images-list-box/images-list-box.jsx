import * as styles from '@components/sell/images-list-box/images-list-box.styles';
import CameraIcon from '@assets/images/sell/camera-icon.svg';
import {launchImageLibrary} from 'react-native-image-picker';
import {Alert, Platform} from 'react-native';

export const ImagesListBox = ({imageUris, setImageUris}) => {
  const showPhoto = async () => {
    if (imageUris.length >= 10) {
      Alert.alert('사진은 10장까지 업로드 가능합니다.');
      return;
    }

    const option = {
      mediaType: 'photo',
      selectionLimit: 10,
    };

    const response = await launchImageLibrary(option);

    if (response.errorMessage) {
      Alert.alert('에러가 발생하였습니다. ' + response.errorMessage);
    } else {
      if (response.assets.length + imageUris.length > 10) {
        Alert.alert('사진은 10장까지 업로드 가능합니다.');
        return;
      }
      let uris = [];
      response.assets.forEach(value => uris.push(value));
      uris.forEach(value => console.log(value.uri));
      setImageUris([...imageUris, ...uris]);
    }
  };

  return (
    <styles.ImageListContainer>
      <styles.ImageListScrollView horizontal>
        {imageUris.map((imageUri, index) => (
          <styles.EachImageBox key={`image-${index}`}>
            <styles.EachImage source={{uri: imageUri.uri}} />
          </styles.EachImageBox>
        ))}
        <styles.EachImageBox onPress={showPhoto}>
          <CameraIcon />
          <styles.EachImageText style={{paddingTop: 7}}>
            전공서적의 사진을 업로드해주세요
          </styles.EachImageText>
          <styles.EachImageText>{imageUris.length}/10</styles.EachImageText>
        </styles.EachImageBox>
      </styles.ImageListScrollView>
    </styles.ImageListContainer>
  );
};
