import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { testNumberIncrementAction, listOfUserAction } from '../../../actions'
import styles from './styles';
import NavigationService from 'app/navigation/NavigationService'
import { useFocusEffect, useIsFocused } from '@react-navigation/native';

export default Login = () => {

  const [count, setCount] = useState(0)

  //componentDiMount
  // useEffect(() => {
  //   dispatch(listOfUserAction())
  // }, [])

  //calling every time screen is focused (used mostly when goBack used)
  useFocusEffect(
    useCallback(() => {
      dispatch(listOfUserAction());
    }, [dispatch])
  );
  
  useEffect(() => {
    console.log('useEffect', incCount, ' count ', count);
  }, [incCount, count])

  const { incCount, userList } = useSelector(state => ({
    incCount: state.login.incrementedNum,
    userList: state.login.userList,
  }), shallowEqual);
  const dispatch = useDispatch();

  return (
    <View style={{ ...styles.container, justifyContent: 'flex-start', paddingTop: 33, backgroundColor: 'pink' }}>
      <TouchableOpacity onPress={() => { dispatch(testNumberIncrementAction()), setCount(count + 1) }}>
        <Text style={styles.login}>Login Status {incCount}</Text>
      </TouchableOpacity>

      {useIsFocused ? <View style={{ flex: 0.5, alignSelf: 'flex-start', backgroundColor: 'yellow' }}>
        <FlatList
          data={userList}
          renderItem={({ item }) => <Text>{item.name} - {item.email}</Text>}
          keyExtractor={item => item.id.toString()}
        />
      </View> : null}

      <Text
        style={{ alignSelf: 'flex-end', fontSize: 33 }}
        onPress={() => NavigationService.navigate('SignUp', { name: 'Ajmal Hasan' })}>NAVIGATE TO --> HOOK FORM</Text>

    </View>
  );
}


