import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PostInput from './Screens/postInput';
import JobPreview from './Screens/jobPreview';
import JobPosted from './Screens/jobPosted';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PostInput">
        <Stack.Screen name="PostInput" component={PostInput} options={{ title: 'Post a Job' }} />
        <Stack.Screen name="JobPreview" component={JobPreview} options={{ title: 'Post a Job' }} />
        <Stack.Screen name="JobPosted" component={JobPosted} options={{ title: 'Job Posted' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
