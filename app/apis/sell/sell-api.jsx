import {BASE_API} from '@/apis/common/CommonApi';

export const postUsedBook = async (
  college,
  department,
  price,
  tradeAvailableDatetime,
  name,
  publisher,
  isUnderlinedOrWrite,
  isDiscolorationAndDamage,
  isCoverDamaged,
  imageUris,
) => {
  try {
    const formData = new FormData();

    const files = imageUris.map(imageUri => {
      return {
        name: imageUri.fileName,
        type: 'image/jpeg',
        uri: imageUri.uri,
      };
    });

    files.forEach(file => {
      formData.append('fileList', file);
    });

    formData.append(
      'usedBook',
      JSON.stringify({
        college,
        department,
        price,
        tradeAvailableDatetime,
        name,
        publisher,
        isUnderlinedOrWrite,
        isDiscolorationAndDamage,
        isCoverDamaged,
      }),
    );

    console.log('formData', formData);

    const response = await BASE_API.post('/api/v1/used-book', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data.usedBookId;
  } catch (error) {
    // 에러 핸들링
    console.error('Error Message:', error.message);
    console.error('Error Config:', error.config);
  }
};
