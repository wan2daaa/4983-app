import styled from 'styled-components/native';
// import CheckBoxSvg from '@assets/images/signup/CheckedButton.svg';
// import UnCheckBoxSvg from '@assets/images/signup/UnCheckedButton.svg';
// import ExpandButtonSvg from '@assets/images/category/ExpandButton.svg';

export const ContentDiv = styled.View`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-left: ${({depth}) => `${depth * 19}px`};
`;
export const TitleBox = styled.View`
  height: 52px;
  background: #fff;
  flex-direction: row;
  align-items: center;
`;

export const TitleTouchableOpacity = styled.TouchableOpacity`
  margin-left: 16px;
`;

export const TitleText = styled.Text`
  margin-left: 11px;
  color: #36332e;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

export const ExpandButtonBox = styled.TouchableOpacity`
  position: absolute;
  right: 16px;
`;

// export const CheckBoxLabel = styled.Text`
//   width: 4.7rem;
//   height: 5.2rem;
//   color: #8f8f8f;
//   display: flex;
//   align-items: center;
//   cursor: pointer;
// `;
//
// export const CheckBoxButton = styled.input.attrs({type: 'checkbox'})`
//   position: absolute;
//   color: var(--b-60, #8f8f8f);
//   opacity: 0;
//   cursor: pointer;
//   left: 1.7rem;
// `;
//
// export const CheckedBox = styled(CheckBoxSvg)`
//   position: relative;
//   z-index: 1001;
// `;
//
// export const UnCheckedBox = styled(UnCheckBoxSvg)`
//   position: relative;
//   z-index: 1000;
// `;
// export const CheckBoxDiv = styled.div`
//   position: relative;
//   width: 2rem;
//   height: 2rem;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-size: cover;
//   opacity: 1;
//   left: 1.7rem;
// `;
//
// export const CollegeDiv = styled.div`
//   position: relative;
//   display: flex;
//   color: var(--b-60, #8f8f8f);
//   width: 89%;
//   height: 5.2rem;
//   box-shadow: 0px -0.5px 0px 0px rgba(0, 0, 0, 0.1) inset;
// `;
//
// export const CollegeName = styled.span`
//   position: absolute;
//   color: var(--b-100, #36332e);
//   width: 18rem;
//   height: 2.4rem;
//   padding: 1.4rem 0;
//   font-size: ${Font.Size.L};
//   font-weight: 400;
//   line-height: 2.4rem;
// `;
//
// export const ExpandButtonDiv = styled.button`
//   position: absolute;
//   right: 1.6rem;
//   width: 1.7rem;
//   height: 1.7rem;
//   top: 1.8rem;
// `;
//
// export const ExpandButton = styled(ExpandButtonSvg)``;
//

// export const CheckBoxDepartmentsLabel = styled.label`
//   position: relative;
//   width: 7rem;
//   height: 5.2rem;
//   color: var(--b-60, #8f8f8f);
//   display: flex;
//   align-items: center;
//   cursor: pointer;
// `;
// export const DepartmentsBox = styled.div`
//   position: relative;
//   height: 5.2rem;
//   width: 100%;
//   background: #fff;
//   display: flex;
// `;
//
// export const DepartmentsCheckBoxDiv = styled.div`
//   position: relative;
//   width: 7rem;
//   height: 2rem;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-size: cover;
//   opacity: 1;
// `;
//
// export const DepartmentsDiv = styled.div`
//   position: relative;
//   display: flex;
//   color: var(--b-60, #8f8f8f);
//   width: 89%;
//   height: 5.2rem;
//   box-shadow: 0px -0.5px 0px 0px rgba(0, 0, 0, 0.1) inset;
// `;
//
// export const DepartmentsCheckBoxButton = styled.input.attrs({
//   type: 'checkbox',
// })`
//   position: relative;
//   color: var(--b-60, #8f8f8f);
//   width: 2rem;
//   height: 2rem;
//
//   opacity: 0;
//   cursor: pointer;
// `;
// export const DepartmentsName = styled.span`
//   position: absolute;
//   color: var(--b-100, #36332e);
//   width: 18rem;
//   height: 2.4rem;
//   padding: 1.4rem 0;
//   font-size: ${Font.Size.L};
//   font-weight: 400;
//   line-height: 2.4rem;
// `;
