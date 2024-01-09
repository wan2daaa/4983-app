import React, {useState} from 'react';
import * as styles from '@/components/category/form/category-form.styles';

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
        <styles.CheckBoxLabel>
          <styles.CheckBoxDiv>
            <styles.CheckBoxButton
              type="checkbox"
              checked={isChecked}
              onChange={() =>
                handleClick(category, parentCategoryList, !isChecked)
              }
            />
            {isChecked ? <styles.CheckedBox /> : <styles.UnCheckedBox />}
          </styles.CheckBoxDiv>
        </styles.CheckBoxLabel>
        <styles.CollegeDiv>
          <styles.CollegeName> {category.name}</styles.CollegeName>
          {hasChildren && (
            <styles.ExpandButtonDiv>
              <styles.ExpandButton onClick={toggleExpansion} />
            </styles.ExpandButtonDiv>
          )}
        </styles.CollegeDiv>
      </styles.TitleBox>
    </styles.ContentDiv>
  );
};
export default CategoryForm;
