import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Etusivu from './screens/Etusivu';
import Yhteenlasku from './screens/Yhteenlasku';
import Vahennyslasku from './screens/Vahennyslasku';
import Kertolasku from './screens/Kertolasku';
import Jakolasku from './screens/Jakolasku';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; 
import Asetukset from './screens/Asetukset';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EtusivuStack from './StackComponents/EtusivuStack';
import { MenuProvider } from 'react-native-popup-menu'; 
import { Menu } from 'react-native-paper';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <MenuProvider>
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Etusivu"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Etusivu') {
              iconName = 'home';
            } else if (route.name === 'Yhteenlasku') {
              iconName = 'plus';
            } else if (route.name === 'Vähennyslasku') {
              iconName = 'minus';
            } else if (route.name === 'Kertolasku') {
              iconName = 'multiplication';
            } else if (route.name === 'Jakolasku') {
              iconName = 'division';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: { backgroundColor: 'lightblue', height: 60 },
          tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' },
          headerShown: false
        })}
      >
        <Tab.Screen name="Etusivu" component={EtusivuStack} options={{ title: 'Etusivu' }} />
        <Tab.Screen name="Yhteenlasku" component={Yhteenlasku} options={{ title: 'Yhteen' }} />
        <Tab.Screen name="Vähennyslasku" component={Vahennyslasku} options={{ title: 'Vähennä' }} />
        <Tab.Screen name="Kertolasku" component={Kertolasku} options={{ title: 'Kerto' }} />
        <Tab.Screen name="Jakolasku" component={Jakolasku} options={{ title: 'Jako' }} />
      </Tab.Navigator>
    </NavigationContainer>
    </MenuProvider>
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
