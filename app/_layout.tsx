// app/_layout.tsx
import {CustomDrawerContent} from '../components/CustomDrawerContent';
import { Ionicons } from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';
import { memo, useCallback } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export const DrawerLayout = memo(() => {

  const handleDrawerContent = useCallback((props: any) => {
    return <CustomDrawerContent {...props} />
  }, [])

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer 
        drawerContent={handleDrawerContent}
        screenOptions={{
          drawerHideStatusBarOnOpen: true,
          drawerLabelStyle: {
             marginLeft: -2,
          },
        }}
      >
        <Drawer.Screen 
          name="index" 
          options={{
            drawerLabel: "Home",
            title: "Home",
            // Get size and color per drawer specifications.
            drawerIcon: ({size, color}) => (
              <Ionicons name="home-outline" size={size} color={color} />
            )
          }}
        />
        <Drawer.Screen 
          name="settings" 
          options={{
            drawerLabel: "Settings",
            title: "Settings",
            drawerIcon: ({size, color}) => (
              <Ionicons name="settings-outline" size={size} color={color} />
            )
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
})

export default DrawerLayout;