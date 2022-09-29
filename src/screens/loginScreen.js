import React, {useState} from 'react';
import {Button, View, StyleSheet, Text} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {addUser} from '../redux/actions';
const LoginScreen = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [id, setId] = useState(0);
  const dispatch = useDispatch();
  const addUserInList = () => {
    if (firstName !== '' && lastName !== '') {
      setId(id + 1);
      dispatch(addUser(firstName, lastName, id));
      alert('User added successfully!!');
      setFirstName('');
      setLastName('');
    } else {
      if (firstName === '') {
        alert('Please fill first name');
      } else if (lastName === '') {
        alert('Please fill last name');
      }
    }
  };
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.heading}>LOGIN SCREEN</Text>
      <TextInput
        style={styles.textInput}
        value={firstName}
        placeholder="Enter firstname"
        onChangeText={value => setFirstName(value)}
      />

      <TextInput
        style={styles.textInput}
        value={lastName}
        placeholder="Enter lastname"
        onChangeText={value => setLastName(value)}
      />
      <View style={styles.buttons}>
        <Button title="ADD USER" onPress={() => addUserInList()} />
        <Button
          title="Users List"
          onPress={() => navigation.navigate('UsersList')}
        />
        <Button
          title="Listing"
          onPress={() => navigation.navigate('Listing')}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  heading: {
    fontSize: 20,
    paddingBottom: 10,
  },
  textInput: {
    paddingBottom: 20,
  },
  buttons: {
    justifyContent: 'space-between',
    height: 140,
    marginTop: 20,
  },
});
export default LoginScreen;
