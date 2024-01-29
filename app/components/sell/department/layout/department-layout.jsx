import {ScrollView, TouchableWithoutFeedback, View} from 'react-native';
import * as styles from '@components/sell/department/layout/department-layout.styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const DepartmentLayout = ({
  navigation,
  departments,
  setSellDepartment,
  isSell,
  usedBookId,
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
                  setSellDepartment(department.value);
                  isSell
                    ? navigation.navigate('Sell')
                    : navigation.navigate('Modify', {
                        usedBookId: usedBookId,
                      });
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
