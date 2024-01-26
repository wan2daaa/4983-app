import {ScrollView, TouchableWithoutFeedback, View} from 'react-native';
import * as styles from '@components/sell/sell-department/layout/sell-department-layout.styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const SellDepartmentLayout = ({
  navigation,
  departments,
  setSellDepartment,
}) => {
  return (
    <styles.Container>
      <TouchableWithoutFeedback>
        <ScrollView>
          <View>
            {departments.map((department, index) => (
              <styles.DepartmentBox
                key={department.id}
                onPress={() => {
                  console.log('save sell-department :', department.value);
                  setSellDepartment(department.value);
                  navigation.navigate('Sell');
                }}>
                <styles.DepartmentText>{department.name}</styles.DepartmentText>
              </styles.DepartmentBox>
            ))}
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </styles.Container>
  );
};
