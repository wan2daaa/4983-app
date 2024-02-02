import {BASE_API} from '@/apis/common/CommonApi';

export const ChatRoomCreate = async (usedBookId, onSuccess, onError) => {
  try {
    const response = await BASE_API.post('/api/v1/chat-room', {
      usedBookId,
    });

    const {chatRoomId} = response.data;
    onSuccess(chatRoomId);

    console.log('채팅방 생성 성공', response);
  } catch (error) {
    console.error('채팅방 생성 실패', error);
    onError(error);
  }
};

export const ChatMessageList = async chatRoomId => {
  try {
    const response = await BASE_API.get(`/api/v1/chat-room/${chatRoomId}`, {
      withCredentials: true,
    });

    console.log('채팅 메시지 조회 성공', response);
    console.log('chatRoomId: ', chatRoomId);
    console.log('response.data: ', response.data);
    console.log('response.data.message: ', response.data.message);
    console.log('response.message: ', response.message);

    return response.data;
  } catch (error) {
    console.error('채팅 메시지 조회 실패', error);
    throw error;
  }
};

export const ChatMessageNotReadList = async chatRoomId => {
  try {
    const response = await BASE_API.get(
      `/api/v1/chat-room/not-read/${chatRoomId}`,
      {
        withCredentials: true,
      },
    );

    console.log('안읽은 메시지 조회 성공', response);

    return response.data.map(datas => ({
      message: datas.message,
      contentType: datas.contentType,
      createdAt: datas.createdAt,
    }));
  } catch (error) {
    console.error('안읽은 메시지 조회 실패', error);
    throw error;
  }
};

export const ChatRoomButton = async (chatRoomId, contentType, message) => {
  try {
    const response = await BASE_API.post(
      '/api/v1/chat-room/interact',
      {
        chatRoomId,
        contentType,
        message,
      },
      {
        withCredentials: true,
      },
    );

    console.log('버튼 이벤트 성공', response);
    return response.data.map(datas => ({
      message: datas.message,
      contentType: datas.contentType,
      createdAt: datas.createdAt,
    }));
  } catch (error) {
    console.error('버튼 이벤트 실패', error);
    console.log('chatRoomId: ', chatRoomId);
    throw error;
  }
};

export const ChatbotLocker = async chatRoomId => {
  try {
    const response = await BASE_API.get(
      `/api/v1/locker/chat-room-available-date?chatRoomId=${chatRoomId}`,
      {
        withCredentials: true,
      },
    );

    console.log('사물함 불러오기 성공', response);

    return response.data;
  } catch (error) {
    console.error('사물함 불러오기 실패', error);
    throw error;
  }
};

export const ChatLockerReservation = async (
  lockerNumber,
  password,
  chatRoomId,
) => {
  try {
    const response = await BASE_API.post(
      '/api/v1/locker',
      {
        lockerNumber,
        password,
        chatRoomId,
      },
      {
        withCredentials: true,
      },
    );

    console.log('사물함 예약 성공', response);
  } catch (error) {
    console.error('사물함 예약 실패', error);
  }
};

export const ChatPostDelete = async chatRoomId => {
  try {
    const response = await BASE_API.delete(`/api/v1/chat-room/${chatRoomId}`, {
      withCredentials: true,
    });

    console.log('채팅방 삭제 성공', response);
  } catch (error) {
    console.error('채팅방 삭제 실패', error);
    console.log('API chatRoomId: ', chatRoomId);
  }
};
