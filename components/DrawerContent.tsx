import React from 'react';
import { View, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem, DrawerContentComponentProps } from '@react-navigation/drawer';

type Props = DrawerContentComponentProps;

const DrawerContent: React.FC<Props> = ({ navigation }) => {
  return (
    <DrawerContentScrollView>
      <View style={styles.drawerContent}>
        <DrawerItem
          label="Home"
          onPress={() => navigation.navigate('MainStack', { screen: 'Home' })}
        />
        <DrawerItem
          label="Explore"
          onPress={() => navigation.navigate('MainStack', { screen: 'Explore' })}
        />
        <DrawerItem
          label="NewHome"
          onPress={() => navigation.navigate('MainStack', { screen: 'NewHome' })}
        />
        {/* Add more DrawerItems for other screens */}
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    paddingVertical: 20,
  },
});

export default DrawerContent;








