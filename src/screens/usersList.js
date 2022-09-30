import React from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {deleteUser} from '../redux/actions';

const UsersList = () => {
  const list = useSelector(state => state.UserDataReducer.userName);
  const dispatch = useDispatch();
  const deleteUserFromList = id => {
    dispatch(deleteUser(id));
    alert('User deleted successfully!!');
  };

  return (
    <View>
      <Text style={styles.listHeading}>USERS LIST</Text>
      {list?.length > 0 ? (
        <FlatList
          data={list}
          renderItem={({item}) => (
            <View style={styles.listItem}>
              <Text>
                {item.firstName} {item.lastName}
              </Text>
              <TouchableOpacity onPress={() => deleteUserFromList(item.id)}>
                <Text>Delete</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      ) : (
        <Text style={{marginLeft: 20}}>No data</Text>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  listHeading: {
    textAlign: 'center',
    fontSize: 20,
    padding: 30,
  },
  listItem: {
    padding: 20,
    borderColor: 'grey',
    borderWidth: 1,
    fontWeight: '900',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export default UsersList;
