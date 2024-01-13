import {useState} from 'react';
import {Categories} from '@data/categories';
import * as styles from '@components/home/filter-button/filter-button.styles';
import {Text, TouchableOpacity, View} from 'react-native';
import SettingIcon from '@assets/images/home/SettingIcon.svg';

const FilterButton = ({
  filterOptions,
  setParamCollege,
  setParamDepartment,
  navigation,
}) => {
  const [selectedFilter, setSelectedFilter] = useState('전체');

  const handleFilterClick = (selectedFilterName, param, id) => {
    setSelectedFilter(selectedFilterName);

    if (id < 10) {
      const foundCategory = Categories.find(
        parentCategory => parentCategory.id === id,
      );
      setParamCollege(foundCategory ? foundCategory.value || '' : '');
      setParamDepartment('');
    } else {
      const foundChildCategory = Categories.flatMap(parentCategory =>
        parentCategory.children.filter(
          categoryChildren => categoryChildren.id === id,
        ),
      );

      const paramDepartmentValue =
        foundChildCategory.length > 0 ? foundChildCategory[0].value || '' : '';
      setParamCollege('');
      setParamDepartment(paramDepartmentValue);
    }
  };

  return (
    <styles.ConditionContainer>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Category');
        }}>
        <SettingIcon width={49} height={35} />
      </TouchableOpacity>
      <styles.filterDiv
        horizontal={true}
        contentContainerStyle={{
          gap: 7,
        }}>
        {selectedFilter === '전체' ? (
          <styles.FilterButtonClicked
            onPress={() => handleFilterClick('전체', '', 0)}>
            <styles.FilterTextClicked>전체</styles.FilterTextClicked>
          </styles.FilterButtonClicked>
        ) : (
          <styles.FilterButton onPress={() => handleFilterClick('전체', '', 0)}>
            <styles.FilterText>전체</styles.FilterText>
          </styles.FilterButton>
        )}
        {filterOptions.map(({key, filter, param}) => (
          <View key={`filter${key}`}>
            {selectedFilter === filter ? (
              <styles.FilterButtonClicked
                onPress={() => handleFilterClick(filter, param, key)}>
                <styles.FilterTextClicked>{filter}</styles.FilterTextClicked>
              </styles.FilterButtonClicked>
            ) : (
              <styles.FilterButton
                onPress={() => handleFilterClick(filter, param, key)}
                // selected={selectedFilter === filter}
                // style 파일에 selected
                // background-color: ${(props) => (props.selected ? "blue" : "white")};
                //   color: ${(props) => (props.selected ? "white" : "black")};
                // 추후 로직 구현때 수정...
              >
                <styles.FilterText>{filter}</styles.FilterText>
              </styles.FilterButton>
            )}
          </View>
        ))}
      </styles.filterDiv>
    </styles.ConditionContainer>
  );
};
export default FilterButton;
