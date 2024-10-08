import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Asetukset from './Asetukset';

export default function Etusivu() {
  return (
    <View>
      <Text>Welcome to the Etusivu Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({})