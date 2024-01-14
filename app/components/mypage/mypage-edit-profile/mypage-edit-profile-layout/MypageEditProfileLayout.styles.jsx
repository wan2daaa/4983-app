import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  background: #ffffff;
`;

export const EditButton = styled.TouchableOpacity`
  margin-right: 5px;
  width: 80px;
  height: 30px;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  background: #02b878;
`;

export const EditButtonText = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: 600;
`;

export const ProfileBox = styled.View`
  margin-bottom: 12px;
  width: 100%;
  height: 157px;
  align-items: center;
  border-bottom-width: 9px;
  border-bottom-color: #f6f6f6;
`;

export const ProfileImage = styled.View`
  margin-top: 4.88px;
  margin-bottom: 11px;
  width: 84px;
  height: 84px;
  border-radius: 42px;
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.15));
  background: bisque;
`;

// export const ProfileImage = styled.Image`
//   width: 84px;
//   height: 84px;
//   fill: #eee;
//   filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.15));
// `;

export const ProfileName = styled.Text`
  color: #36332e;
  font-size: 18px;
  font-weight: 700;
`;
