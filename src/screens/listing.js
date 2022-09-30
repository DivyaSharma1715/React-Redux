import React, {useEffect} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {fetchListing} from '../redux/actions';

const Listing = ({userData, fetchListing}) => {
  useEffect(() => {
    fetchListing();
  }, []);

  return (
    <View>
      <Text style={styles.heading}>DATA LISTING FROM API</Text>
      {userData?.loading ? (
        <View>
          <Text>Loading...</Text>
        </View>
      ) : userData?.error ? (
        <View>
          <Text>{userData?.error}</Text>
        </View>
      ) : (
        <FlatList
          data={userData?.users}
          renderItem={({item, index}) => (
            <View style={styles.usersDataList}>
              <Text>{index + 1} </Text>
              <Text>{item.name}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};
const mapStateToProps = state => {
  return {
    userData: state.UserDataReducer,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchListing: () => dispatch(fetchListing()),
  };
};
const styles = StyleSheet.create({
  heading: {
    padding: 10,
  },
  usersDataList: {
    flexDirection: 'row',
    padding: 20,
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Listing);
