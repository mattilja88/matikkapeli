import React from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu'; // Import Menu components
import Asetukset from '../screens/Asetukset';
import Etusivu from '../screens/Etusivu';
import Sovellusinfo from '../screens/Sovellusinfo';

const Stack = createNativeStackNavigator();

export default function EtusivuStack({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Etusivu"
        component={Etusivu}
        options={{
          headerRight: () => (
            <Menu>
              <MenuTrigger>
                <Icon name="dots-vertical" size={24} color="black" style={{ marginRight: 10 }} />
              </MenuTrigger>
              <MenuOptions style={styles.MenuOptions}>
                <MenuOption onSelect={() => navigation.navigate('Asetukset')}>
                  <View style={styles.menuChild}>
                    <Icon name="cog" size={18} color="black" />
                    <Text style={styles.menuText}>Asetukset</Text> 
                  </View>
                </MenuOption>
                <MenuOption onSelect={() => navigation.navigate('Sovellusinfo')}>
                  <View style={styles.menuChild}>
                    <Icon name="information-outline" size={18} color="black" />
                    <Text style={styles.menuText}>Tietoa sovelluksesta</Text>
                  </View>
                </MenuOption>
              </MenuOptions>
            </Menu>
          ),
          title: 'Etusivu',
        }}
      />
      <Stack.Screen name="Asetukset" component={Asetukset} options={{ title: 'Asetukset' }} />
      <Stack.Screen name="Sovellusinfo" component={Sovellusinfo} options={{ title: 'Info' }} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
    MenuOptions: {

    },
    menuChild: {
        flexDirection: 'row', 
        alignItems: 'center',
        padding: 8,
        justifyContent: 'center'

    },
    menuText: {
        marginLeft: 8,
        marginRight: 0,
    }
});
