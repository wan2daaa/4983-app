import React, {useEffect, useState} from 'react';
import * as styles from '@/components/category/form/category-form.styles';
import {Text, TouchableOpacity, View} from 'react-native';
import CheckedButton from '@assets/images/signup/CheckedButton.svg';
import UnCheckedButton from '@assets/images/signup/UnCheckedButton.svg';
import ExpandButton from '@assets/images/category/ExpandButton.svg';
const CategoryForm = ({
  id,
  category,
  depth,
  handleClick,
  selectedCategoryIds,
  parentCategoryList,
  isExpandedCategoryIds,
  setIsExpandCategoryIds,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const hasChildren = category.children.length > 0;
  const isChecked = selectedCategoryIds.includes(category.id);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
    if (isExpanded) {
      setIsExpandCategoryIds(
        isExpandedCategoryIds.filter(value => value !== id),
      );
    } else {
      setIsExpandCategoryIds([...isExpandedCategoryIds, id]);
    }
  };

  return (
    <styles.ContentDiv depth={depth}>
      <styles.TitleBox>
        <styles.TitleTouchableOpacity
          onPress={() => {
            handleClick(category, parentCategoryList, !isChecked);
          }}>
          {isChecked ? (
            <CheckedButton width={20} height={20} />
          ) : (
            <UnCheckedButton width={20} height={20} />
          )}
        </styles.TitleTouchableOpacity>
        <styles.TitleText>{category.name}</styles.TitleText>
        {hasChildren && (
          <styles.ExpandButtonBox onPress={toggleExpansion}>
            <ExpandButton width={20} height={20} />
          </styles.ExpandButtonBox>
        )}
      </styles.TitleBox>
    </styles.ContentDiv>
  );
};
export default CategoryForm;
