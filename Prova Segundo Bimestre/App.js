import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginPage from './src/pages/LoginPage';
import RegisterPage from './src/pages/RegisterPage';
import ForgotPasswordPage from './src/pages/ForgetPasswordPage';
import DashbordPage from './src/pages/DashbordPage';



import { StyleSheet } from 'react-native';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name='LoginPage' component={LoginPage} />
      <Stack.Screen name='RegisterPage' component={RegisterPage} />
      <Stack.Screen name='ForgotPasswordPage' component={ForgotPasswordPage} />
      <Stack.Screen name='DashbordPage' component={DashbordPage} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
