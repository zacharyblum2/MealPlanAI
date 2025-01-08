import { memo } from "react";
import { View, Text} from "react-native";

export const SettingsPage = memo(() => {
  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Text>Home</Text>
    </View>
  )
});

export default SettingsPage;