import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { memo } from "react";
import { View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const CustomDrawerContent = memo((props: any) => {
  const { top, bottom } = useSafeAreaInsets();

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView 
        {...props} 
        scrollEnabled={false}
        contentContainerStyle={{
          paddingTop: top,
          paddingBottom: bottom
        }}
      >
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View
        style={{
          borderTopColor: "#dde3f3",
          borderTopWidth: 1,
          padding: 20,
          paddingBottom: bottom,
        }}
      >
        <Text>Footer</Text>
      </View>
    </View>
  )
})

export default CustomDrawerContent;