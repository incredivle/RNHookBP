import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { testNumberIncrementAction, listOfUserAction } from '../../../actions'
import styles from './styles';
import NavigationService from 'app/navigation/NavigationService'
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

export default Login = () => {

  handleViewRef = ref => this.view = ref;
  bounce = () => this.view.bounce(800).then(endState => console.log(endState.finished ? 'bounce finished' : 'bounce cancelled'));

  const [count, setCount] = useState(0)

  //componentDiMount
  // useEffect(() => {
  //   dispatch(listOfUserAction())
  // }, [])

  //calling every time screen is focused (used mostly when goBack used)
  useFocusEffect(
    useCallback(() => {
      dispatch(listOfUserAction());
      bounce()
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

      <Animatable.View ref={this.handleViewRef}>
          <Text>Bounce me!</Text>
        </Animatable.View>

      <View style={{ flex: 0.5, alignSelf: 'flex-start', backgroundColor: 'yellow' }}>
        <FlatList
          data={userList}
          renderItem={({ item }) => <Text>{item.name} - {item.email}</Text>}
          keyExtractor={item => item.id.toString()}
        />
      </View>

      <Text
        style={{ alignSelf: 'flex-end', fontSize: 33 }}
        onPress={() => NavigationService.navigate('SignUp', { name: 'Ajmal Hasan' })}>NAVIGATE TO --> HOOK FORM</Text>
    </View>
  );
}


