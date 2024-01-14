import React, {useEffect} from 'react';
import {useState} from 'react';
import {Categories} from '@data/categories';
import CategoryForm from '@components/category/form/category-form';
import * as styles from '@components/category/layout/category-layout.styles';

import CancelButton from '@assets/images/category/CancelButton.svg';
import CheckedButton from '@assets/images/signup/CheckedButton.svg';
import UnCheckedButton from '@assets/images/signup/UnCheckedButton.svg';

import {ScrollView, Text, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CategoryLayout = ({navigation, filterOptions}) => {
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [selectedCategoryIds, setSelectedCategoryIds] = useState(filterOptions);
  const [categoriesState, _] = useState(Categories);
  const [isExpandCategoryIds, setIsExpandCategoryIds] = useState([]);

  useEffect(() => {
    let categoryIdLength = categoriesState.length;
    categoriesState.map(category => {
      categoryIdLength += category.children.length;
    });

    if (selectedCategoryIds.length === categoryIdLength) {
      setIsAllChecked(true);
    } else {
      setIsAllChecked(false);
    }
  }, []);

  const getAllChildIds = category => {
    const children = category.children;
    let childIds = [];

    if (children.length === 0) {
      return childIds;
    }

    children.forEach(child => {
      childIds.push(child.id);
      childIds = childIds.concat(getAllChildIds(child));
    });
    return childIds;
  };

  const toggleCategory = async (clickedCategory, parentCategory, isClicked) => {
    // 체크 취소 할 때
    if (isClicked) {
      let filteredIds;

      if (clickedCategory.id > 9) {
        filteredIds = selectedCategoryIds
          .filter(id => id !== clickedCategory.id)
          .sort((a, b) => a - b);

        const childrenCategoryIds = parentCategory.children.map(
          children => children.id,
        );

        filteredIds = filteredIds.filter(id => id !== parentCategory.id);
        setSelectedCategoryIds(filteredIds);
      } else {
        const childIds = clickedCategory.children.map(children => children.id);

        filteredIds = selectedCategoryIds
          .filter(id => id !== clickedCategory.id && !childIds.includes(id))
          .sort((a, b) => a - b);

        setSelectedCategoryIds(filteredIds);
      }

      const collegeList = [];
      const departmentList = [];
      filteredIds.forEach(filteredId =>
        filteredId < 10
          ? collegeList.push(filteredId)
          : departmentList.push(filteredId),
      );

      await AsyncStorage.setItem(
        'category-college',
        JSON.stringify(collegeList),
      );
      await AsyncStorage.setItem(
        'category-department',
        JSON.stringify(departmentList),
      );
    }
    // 체크 할 때
    else {
      let filteredIds;
      if (clickedCategory.id > 9) {
        filteredIds = [...selectedCategoryIds, clickedCategory.id];

        const childrenCategoryIds = parentCategory.children.map(
          children => children.id,
        );

        const isFilteredIdsIncludes = childrenCategoryIds.every(id =>
          filteredIds.includes(id),
        );

        if (isFilteredIdsIncludes) {
          filteredIds.push(parentCategory.id);
        }
        setSelectedCategoryIds(filteredIds);
      } else {
        filteredIds = [...selectedCategoryIds, clickedCategory.id];

        let childrenCategoryIds = clickedCategory.children.map(
          children => children.id,
        );

        childrenCategoryIds.map(childrenCategoryId => {
          if (!filteredIds.includes(childrenCategoryId)) {
            filteredIds.push(childrenCategoryId);
          }
        });
        setSelectedCategoryIds(filteredIds);
      }

      const collegeList = [];
      const departmentList = [];
      filteredIds.forEach(filteredId =>
        filteredId < 10
          ? collegeList.push(filteredId)
          : departmentList.push(filteredId),
      );

      await AsyncStorage.setItem(
        'category-college',
        JSON.stringify(collegeList),
      );
      await AsyncStorage.setItem(
        'category-department',
        JSON.stringify(departmentList),
      );
    }
  };
  const toggleAllCheckboxes = async () => {
    const allChildAndParentIds = [];
    const collegeList = [];

    if (isAllChecked) {
      setIsAllChecked(false);

      setSelectedCategoryIds([]);

      await AsyncStorage.setItem('category-department', '');
      await AsyncStorage.setItem('category-college', '');
    } else {
      const allCollegeIds = [];
      const allDepartmentIds = [];

      setIsAllChecked(true);

      Categories.forEach(category => {
        allCollegeIds.push(category.id);
        category.children.forEach(children => {
          allDepartmentIds.push(children.id);
        });
      });

      Categories.forEach(category => {
        collegeList.push(category.id);

        allChildAndParentIds.push(category.id);
        category.children.forEach(children => {
          allChildAndParentIds.push(children.id);
        });
      });
      setSelectedCategoryIds(allChildAndParentIds);

      await AsyncStorage.setItem(
        'category-department',
        JSON.stringify(allDepartmentIds),
      );
      await AsyncStorage.setItem(
        'category-college',
        JSON.stringify(allCollegeIds),
      );
    }
  };

  const unableAllCheckBoxes = async () => {
    setIsAllChecked(false);

    setSelectedCategoryIds([]);

    await AsyncStorage.setItem('category-department', '');
    await AsyncStorage.setItem('category-college', '');
  };

  const renderCategories = (
    categoryList,
    depth = 0,
    parentCategory = [],
    isExpandedCategoryIds = [],
  ) =>
    categoryList.map(category => (
      <React.Fragment key={`fragment${category.id}`}>
        <CategoryForm
          id={category.id}
          depth={depth}
          category={category}
          handleClick={isClicked =>
            toggleCategory(category, parentCategory, isClicked)
          }
          selectedCategoryIds={selectedCategoryIds}
          isExpandedCategoryIds={isExpandedCategoryIds}
          setIsExpandCategoryIds={setIsExpandCategoryIds}
        />
        {category.children.length > 0 &&
          !isExpandedCategoryIds.includes(category.id) &&
          renderCategories(category.children, depth + 1, category, [])}
      </React.Fragment>
    ));

  return (
    <styles.CategoryContainer>
      <styles.HeaderContainer>
        <styles.HeaderText>관심 카테고리 설정</styles.HeaderText>
      </styles.HeaderContainer>
      <styles.CancelButtonBox
        onPress={() => {
          navigation.reset({routes: [{name: 'BottomTabs'}]});
        }}>
        <CancelButton width={20} height={20} />
      </styles.CancelButtonBox>
      <TouchableOpacity
        onPress={isAllChecked ? unableAllCheckBoxes : toggleAllCheckboxes}>
        <styles.AllSelectContainer>
          <styles.AllSelectButton
            onPress={isAllChecked ? unableAllCheckBoxes : toggleAllCheckboxes}>
            {isAllChecked ? <CheckedButton /> : <UnCheckedButton />}
          </styles.AllSelectButton>
          <styles.AllSelectText>전체선택</styles.AllSelectText>
        </styles.AllSelectContainer>
      </TouchableOpacity>
      <ScrollView>
        {renderCategories(categoriesState, 0, null, isExpandCategoryIds)}
      </ScrollView>
    </styles.CategoryContainer>
  );
};
export default CategoryLayout;
