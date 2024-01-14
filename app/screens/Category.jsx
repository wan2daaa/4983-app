import CategoryLayout from '@components/category/layout/category-layout';

const Category = ({navigation, route}) => {
  console.log('route : ', route);
  return (
    <CategoryLayout
      navigation={navigation}
      filterOptions={route.params.filterOptions.map(
        filterOption => filterOption.key,
      )}
    />
  );
};

export default Category;
