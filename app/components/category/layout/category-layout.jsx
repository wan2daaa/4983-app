import {useState} from 'react';
import {Categories} from '@data/categories';
import CategoryForm from '@components/category/form/category-form';
import * as styles from '@components/category/layout/category-layout.styles';

import CancelButton from '@assets/images/category/CancelButton.svg';
import CheckedButton from '@assets/images/signup/CheckedButton.svg';
import UnCheckedButton from '@assets/images/signup/UnCheckedButton.svg';

import {TouchableOpacity} from 'react-native';
import {AllSelectButton} from '@components/category/layout/category-layout.styles';

const CategoryLayout = ({navigation}) => {
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [selectedCategoryIds, setSelectedCategoryIds] = useState([]);
  const [categoriesState, _] = useState(Categories);
  const [isExpandCategoryIds, setIsExpandCategoryIds] = useState([]);

  let childIds = [];

  const getAllChildIds = category => {
    const children = category.children;

    if (children.length === 0) {
      return childIds;
    }

    children.forEach(child => {
      childIds.push(child.id);
      childIds = childIds.concat(getAllChildIds(child));
    });
    return childIds;
  };

  const toggleCategory = (clickedCategory, parentCategoryList) => {
    // 자식들의 id를 가져온다.
    childIds = getAllChildIds(clickedCategory);

    if (selectedCategoryIds.includes(clickedCategory.id)) {
      let tempIds = selectedCategoryIds.filter(
        id => id !== clickedCategory.id && !childIds.includes(id),
      );
      for (let i = 0; i < parentCategoryList.length; i += 1) {
        const parentCategory = parentCategoryList[i];
        if (parentCategory && selectedCategoryIds.includes(parentCategory.id)) {
          tempIds = tempIds.filter(id => id !== parentCategory.id);
        }
      }
      tempIds = tempIds.filter(id => !childIds.includes(id));
      setSelectedCategoryIds(tempIds);

      const collegeList = [];
      const departmentList = [];
      tempIds.forEach(tempId =>
        tempId <= 9 ? collegeList.push(tempId) : departmentList.push(tempId),
      );
      // localStorage.setItem('category-college', JSON.stringify(collegeList));
      // localStorage.setItem(
      //   'category-department',
      //   JSON.stringify(departmentList),
      // );
    } else {
      let tempIds = [...selectedCategoryIds, ...childIds, clickedCategory.id];
      const reversedParents = [...parentCategoryList].reverse();
      reversedParents.forEach(parentCategory => {
        const parentChildrenIds = parentCategory?.children.map(item => item.id);
        const allChildrenChecked = parentChildrenIds.every(id =>
          tempIds.includes(id),
        );
        if (
          allChildrenChecked &&
          parentCategory &&
          parentChildrenIds?.every(item => tempIds.includes(item))
        ) {
          tempIds.push(parentCategory.id);
        }
      });
      // 중복제거
      tempIds = tempIds.filter(
        (value, index, self) => self.indexOf(value) === index,
      );
      setSelectedCategoryIds(tempIds);

      const collegeList = [];
      const departmentList = [];
      tempIds.forEach(tempId =>
        tempId <= 9 ? collegeList.push(tempId) : departmentList.push(tempId),
      );
      // localStorage.setItem('category-college', JSON.stringify(collegeList));
      // localStorage.setItem(
      //   'category-department',
      //   JSON.stringify(departmentList),
      // );
    }
  };
  const toggleAllCheckboxes = () => {
    const allChildAndParentIds = [];
    const collegeList = [];
    setIsAllChecked(!isAllChecked);
    setSelectedCategoryIds([]);

    if (!isAllChecked) {
      categoriesState.forEach(category => {
        collegeList.push(category.id);

        allChildAndParentIds.push(category.id);
        category.children.forEach(children => {
          allChildAndParentIds.push(children.id);
        });
      });
      setSelectedCategoryIds(allChildAndParentIds);

      // localStorage.setItem('category-department', '');
      // localStorage.setItem('category-college', JSON.stringify(collegeList));
    }
  };

  const unableAllCheckBoxes = () => {
    setIsAllChecked(false);

    setSelectedCategoryIds([]);
    // localStorage.setItem('category-department', '');
    // localStorage.setItem('category-college', '');
  };

  const renderCategories = (
    categoryList,
    depth = 0,
    parentCategory = [],
    isExpandedCategoryIds = [],
  ) =>
    categoryList.map(category => (
      <React.Fragment key={category.id}>
        <CategoryForm
          id={category.id}
          depth={depth}
          category={category}
          handleClick={clickedCategory =>
            toggleCategory(clickedCategory, parentCategory)
          }
          selectedCategoryIds={selectedCategoryIds}
          parentCategoryList={parentCategory}
          isExpandedCategoryIds={isExpandedCategoryIds}
          setIsExpandCategoryIds={setIsExpandCategoryIds}
        />
        {category.children.length > 0 &&
          !isExpandedCategoryIds.includes(category.id) &&
          renderCategories(category.children, depth + 1, [
            ...parentCategory,
            category,
          ])}
      </React.Fragment>
    ));

  return (
    <styles.CategoryContainer>
      <styles.HeaderContainer>
        <styles.HeaderText>관심 카테고리 설정</styles.HeaderText>
      </styles.HeaderContainer>
      <styles.CancelButtonBox
        onPress={() => {
          navigation.goBack();
        }}>
        <CancelButton width={20} height={20} />
      </styles.CancelButtonBox>
      <styles.AllSelectContainer>
        <styles.AllSelectButton onPress={toggleAllCheckboxes}>
          {isAllChecked ? <CheckedButton /> : <UnCheckedButton />}
        </styles.AllSelectButton>
      </styles.AllSelectContainer>
      {/*<style.TopDiv>*/}
      {/*  <style.TitleDiv>*/}
      {/*    <style.CancelButtonDiv>*/}
      {/*      <style.CancelButton />*/}
      {/*    </style.CancelButtonDiv>*/}
      {/*    <style.TitleA>관심 카테고리 설정</style.TitleA>*/}
      {/*  </style.TitleDiv>*/}
      {/*  <style.AllDiv>*/}
      {/*    <style.AllButton onClick={toggleAllCheckboxes} />*/}
      {/*    {isAllChecked ? <style.CheckedBox /> : <style.UnCheckedBox />}*/}
      {/*    <style.AllA>전체선택</style.AllA>*/}
      {/*    <style.AllB onClick={unableAllCheckBoxes}>전체선택 취소</style.AllB>*/}
      {/*  </style.AllDiv>*/}
      {/*</style.TopDiv>*/}
      {/*{renderCategories(categoriesState, 0, [], isExpandCategoryIds)}*/}
    </styles.CategoryContainer>
  );
};
export default CategoryLayout;
