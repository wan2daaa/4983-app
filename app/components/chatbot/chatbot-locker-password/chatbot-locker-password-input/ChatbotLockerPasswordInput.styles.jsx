import styled from 'styled-components/native';

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#D1D1D1',
})`
  width: 352px;
  padding: 5px 13px;
  border-bottom-width: 1px;
  border-bottom-color: #eee;
  margin-bottom: 9px;
`;

export const GuideText = styled.Text`
  padding-left: 8px;
  color: #02b878;
  font-size: 12px;
  font-weight: 400;
`;
