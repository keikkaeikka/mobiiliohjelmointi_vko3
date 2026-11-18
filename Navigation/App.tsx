import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/Homescreen'
import SecondScreen from './screens/Secondscreen';
import { StatusBar } from 'expo-status-bar';
import { PaperProvider } from 'react-native-paper';
import MyAppbar from './components/MyAppbar';
import { RootStackParamList } from './types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="Home"
          screenOptions={{
            header: (props) => <MyAppbar {...props} />,
          }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="SecondScreen" component={SecondScreen} />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </PaperProvider>  
  );
};

