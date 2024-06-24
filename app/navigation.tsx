import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './(tabs)/home';
import TabTwoScreen from './(tabs)/explore';
import HomeScreen from './(tabs)/index';
import DrawerContent from '../components/DrawerContent';
import CustomHeader from '../components/Header';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MainStack = () => (
  <Stack.Navigator
    screenOptions={({ navigation, route }) => ({
      header: () => {
        const title = route.name;
        return <CustomHeader title={title} navigation={navigation} />;
      },
    })}
  >
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Explore" component={TabTwoScreen} />
    <Stack.Screen name="NewHome" component={HomePage} />
  </Stack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="MainStack" component={MainStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;


