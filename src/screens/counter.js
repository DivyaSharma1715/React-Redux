import React from 'react';
import {Button, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {add, sub} from '../redux/actions';

const Counter = () => {
  const count = useSelector(state => state.UserDataReducer.counter);
  const dispatch = useDispatch();

  return (
    <View>
      <Button title="Add" onPress={() => dispatch(add(count))} />
      <Text style={{margin: 20}}>{count}</Text>
      <Button title="Subtract" onPress={() => dispatch(sub(count))} />
    </View>
  );
};
export default Counter;
